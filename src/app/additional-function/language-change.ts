import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from './language-translate';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {
  private static readonly LOCAL_STORAGE_KEY = 'selectedLanguage';
  private languageSubject = new BehaviorSubject<Language>(
    (localStorage.getItem(LanguageService.LOCAL_STORAGE_KEY) as Language) || 'en'
  );
  currentLanguage$ = this.languageSubject.asObservable();

  
  /**
   * The language is changed in this function.
   * 
   * @param lang 
   */
  setLanguage(lang: Language): void {
    this.languageSubject.next(lang);
  }


  /**
   * The current language is called up.
   * 
   * @returns 
   */
  getLanguage(): Language {
    return this.languageSubject.getValue();
  }
}
