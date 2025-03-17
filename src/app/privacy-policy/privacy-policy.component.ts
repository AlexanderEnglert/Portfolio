import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../app/additional-function/language-change';
import {TRANSLATIONS,Language,} from '../../app/additional-function/language-translate';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})

export class PrivacyPolicyComponent {
  translations: any = {};
  currentLanguage: Language = 'en';

  constructor(private languageService: LanguageService) {}

  /**
  * Initializes the component by setting the language and translations.
  * - Retrieves the saved language from Local Storage (if available).
  * - If no language is saved, it defaults to the LanguageService setting.
  * - Updates the component's translations based on the selected language.
  * - Subscribes to language changes to dynamically update translations.
  */
  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
      this.languageService.setLanguage(savedLanguage);
    } else {
      this.currentLanguage = this.languageService.getLanguage();
    }
    this.translations = TRANSLATIONS[this.currentLanguage];
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.currentLanguage = lang;
      this.translations = TRANSLATIONS[lang];
    });
  }
}
