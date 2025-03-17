import {Injectable , OnInit } from '@angular/core';
import { LanguageService } from './language-change';
import { TRANSLATIONS, Language } from './language-translate';

@Injectable() 

export abstract class BaseComponent implements OnInit {
  translations: any = {};
  currentLanguage: Language = 'en';

  constructor(protected languageService: LanguageService) {}

  /**
   * The current language is initialised and called up.
   * If the language has been changed, the language is updated.
   */
  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.translations = TRANSLATIONS[this.currentLanguage];
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.currentLanguage = lang;
      this.translations = TRANSLATIONS[lang];
    });
  }
}

