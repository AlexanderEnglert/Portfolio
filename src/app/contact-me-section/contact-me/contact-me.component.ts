import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactMeEmailComponent } from '../contact-me-email/contact-me-email.component';
import { BaseComponent } from '../../../app/additional-function/language-save-function';
import { LanguageService } from '../../../app/additional-function/language-change';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ContactMeEmailComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent  extends BaseComponent{
  constructor(languageService: LanguageService) {
    super(languageService);
  }
}
