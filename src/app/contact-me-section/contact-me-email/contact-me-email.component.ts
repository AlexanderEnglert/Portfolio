import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../app/additional-function/language-change';
import {TRANSLATIONS,Language,} from '../../../app/additional-function/language-translate';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-me-email',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-me-email.component.html',
  styleUrl: './contact-me-email.component.scss',
})

export class ContactMeEmailComponent {
  name: string = '';
  email: string = '';
  textAreaValue: string = '';
  checkbox1: boolean = false;
  isButtonDisabled: boolean = true;
  showSendMail: boolean = false;
  isEmailValid: boolean = false;
  translations: any = {};
  currentLanguage: Language = 'en';
  post = {
    endPoint: 'https://alexander-englert.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  emptyFields: { [key: string]: boolean } = {
    name: true,
    email: true,
    message: true,
  };

  touchedFields: { [key: string]: boolean } = {
    name: false,
    email: false,
    message: false,
  };

  editedFields: { [key: string]: boolean } = {
    name: false,
    email: false,
    message: false,
  };

  constructor(private languageService: LanguageService,private http: HttpClient) {}

  /**
   * Initialises the component.
   * - Sets the current language and translations.
   * - Subscribes to language changes.
   */
  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.translations = TRANSLATIONS[this.currentLanguage];
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.currentLanguage = lang;
      this.translations = TRANSLATIONS[lang];
    });
    this.checkFormValidity();
  }
  

  /**
   * Returns the appropriate placeholder for an input field.
   *
   * @param {string} field 
   * @param {string} placeholder
   * @param {string} placeholderAlternative
   * @returns {string}
   */
  getPlaceholder(field: string, placeholder: string, placeholderAlternative: string): string {  
    if (this.editedFields[field] === true && this.isFieldEmpty(field) === true) {
        return this.translations.contactMeEmail[placeholderAlternative];
    } else {
        return this.translations.contactMeEmail[placeholder];
    }
  }


  /**
   * Is called up when a field receives the focus.
   *
   * @param {string} field 
   */
  onFocus(field: string): void {
    this.touchedFields[field] = true;
  }


  /**
  * Removes leading spaces from the entered value of an input or textarea field.
  * Updates the value in the DOM to ensure immediate visibility.
  * Puts the cleaned value into the Angular binding.
  * Performs a new form validation.
  *
  * @param {Event} event
  * @param {'name' | 'email' | 'textAreaValue'} field
  */
  trimLeadingSpaces(event: Event, field: 'name' | 'email' | 'textAreaValue'): void {
    const inputField = event.target as HTMLInputElement | HTMLTextAreaElement;
    inputField.value = inputField.value.replace(/^\s+/, ''); 
    this[field] = inputField.value;
    this.checkFormValidity();
  }


  /**
   * Is called up each time a field is entered.
   * - Marks the field as edited.
   * - Updates the empty status of the field.
   * - Forces a change registration in Angular.
   *
   * @param {string} field
   */
  onInput(field: string): void {
    const value = this[field as keyof ContactMeEmailComponent];
    this.editedFields[field] = true;
    if (typeof value === 'string') {
      this.emptyFields[field] = value.trim() === '';
      this.forceChangeDetection();
    }
  }


  /**
   * Validates the email field using a standard regex.
   */
  validateEmail(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isEmailValid = emailRegex.test(this.email);
    this.checkFormValidity();
  }


  /**
   * Is called up when an input field loses focus.
   * - Updates the empty status of the field.
   *
   * @param {string} field
   */
  onBlur(field: string): void {
    const value = this[field as keyof ContactMeEmailComponent];
    if (typeof value === 'string') {
      this.emptyFields[field] = value.trim() === '';
    }
  }


  /**
   * Checks whether a field is empty and has already been edited.
   *
   * @param {string} field
   * @returns {boolean}
   */
  isFieldEmpty(field: string): boolean {
    return this.editedFields[field] && this.emptyFields[field];
  }


  /**
   * Forces a new change registration in Angular.
   * This ensures that the UI status is updated.
   */
  private forceChangeDetection(): void {
    this.name = this.name;
    this.email = this.email;
    this.textAreaValue = this.textAreaValue;
  }


  /**
 * Determines whether the checkbox should be highlighted in red.
 * The checkbox gets a red border if all input fields are filled but the checkbox is not checked.
 *
 * @returns {boolean} True if the checkbox should be highlighted, false otherwise.
 */
  shouldHighlightCheckbox(): boolean {
    return (
      !this.checkbox1 &&
      this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.textAreaValue.trim() !== '' &&
      (this.isEmailValid ?? false) // Null-Sicherstellung
    );
  }



  /**
   * Checks the validity of the form and sends an e-mail if the form is valid.
   */
  validateAndSendEmail(): void {
    if (!this.isButtonDisabled) {
      const contactData = {
        name: this.name,
        email: this.email,
        message: this.textAreaValue,
      };
      this.sendEmailRequest(contactData);
      this.showSuccessMessage();
      this.resetForm();
    }
  }


  /**
   * Displays the success message for 1500ms and deactivates scrolling.
   */
  showSuccessMessage(): void {
    this.showSendMail = true;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.showSendMail = false;
      document.body.style.overflow = 'auto';
      this.resetForm();
    }, 1500);
  }


  /**
   *  Checks whether the form is valid.
   * The form is valid if all fields are filled in and the checkbox is activated.
   */
  checkFormValidity(): void {
    this.isButtonDisabled = !(
      this.name.trim() &&
      this.email.trim() &&
      this.textAreaValue.trim() &&
      this.checkbox1 &&
      this.isEmailValid
    );
  }


  /**
   * Sends an e-mail with the specified contact details via HTTP POST request.
   * 
   * @param contactData
   */
  private sendEmailRequest(contactData: { name: string; email: string; message: string }): void {
    this.http.post(
        this.post.endPoint,
        JSON.stringify(contactData),
        {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
        }
    ).subscribe(() => this.resetForm());
  }

 
  /**
   * Resets the form.
   * - Clears the input fields.
   * - Deactivates the checkbox.
   * - Sets the send button to deactivated.
   */
  resetForm(): void {
    this.name = '';
    this.email = '';
    this.textAreaValue = '';
    this.checkbox1 = false;
    this.isButtonDisabled = true;
    this.editedFields['message'] = false;
  }
}
