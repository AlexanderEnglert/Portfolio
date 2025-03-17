import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../app/additional-function/language-change';
import { TRANSLATIONS, Language, } from '../../../app/additional-function/language-translate';

@Component({
  selector: 'app-colleagues-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues-slider.component.html',
  styleUrl: './colleagues-slider.component.scss',
})

export class ColleaguesSliderComponent {
  colleaguesText: string[] = [];
  colleaguesName: string[] = [
    'S.Dietrich - Team Partner',
  ];
  picturePosition: number = 0;
  currentIndex: number = 0;
  transitionStyle: string = 'transform 0.5s ease';
  translations: any = {};
  currentLanguage: Language = 'en';
  get displayedItems() {
    return [
      this.colleaguesText[this.currentIndex],
    ].map((text, i) => ({
      text,
      name: this.colleaguesName[
        (this.currentIndex + i) % this.colleaguesName.length
      ],
    }));
  }

  constructor(private languageService: LanguageService) {}

  /**
   * The current language is initialised and called up.
   * If the language has been changed, the language is updated and further functions are called up.
   */
  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.translations = TRANSLATIONS[this.currentLanguage];
    this.updateSliderTexts();
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.currentLanguage = lang;
      this.translations = TRANSLATIONS[lang];
      this.updateSliderTexts();
    });
    this.updatePicturePosition();
    window.addEventListener('resize', this.updatePicturePosition.bind(this));
  }


  /**
   * Updates the position of the picture (quotes icon) based on the window width.
   * It adjusts dynamically for different screen sizes to ensure proper alignment.
   */
  private updatePicturePosition() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1100 && windowWidth > 900) {
      this.picturePosition = windowWidth / 2 - 300;
    } else if (windowWidth <= 900 && windowWidth > 600) {
      this.picturePosition = windowWidth / 2 - 250;
    } else if (windowWidth <= 600) {
      this.picturePosition = windowWidth / 2 - 143;
    } 
     else if (windowWidth > 1920) {
      this.picturePosition = 612;
    } 
    else {
      this.picturePosition = windowWidth / 2 - 350;
    }
  }


  /**
   * Removes the resize event listener when the component is destroyed
   * to prevent memory leaks.
   */
  ngOnDestroy() {
    window.removeEventListener('resize', this.updatePicturePosition.bind(this));
  }


  /**
   * Updates the slider text with translations based on the selected language.
   * This function sets up the displayed texts dynamically.
   */
  updateSliderTexts(): void {
    this.colleaguesText = [
      this.translations.colleaguessSlider.colleaguesTextFirst,
      this.translations.colleaguessSlider.colleaguesTextSecond,
      this.translations.colleaguessSlider.colleaguesTextThird,
    ];
  }
}
