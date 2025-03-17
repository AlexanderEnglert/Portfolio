import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../../app/additional-function/language-change';
import {TRANSLATIONS,Language,} from '../../../app/additional-function/language-translate';

@Component({
  selector: 'app-main-top-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-top-slider.component.html',
  styleUrl: './main-top-slider.component.scss',
})

export class MainTopSliderComponent {
  mainTopSlider: string[] = [];
  translations: any = {};
  repeatedSliderItems: string[] = [];
  currentLanguage: Language = 'en';
  @ViewChild('scrollingImage', { static: true }) scrollingImage!: ElementRef<HTMLDivElement>;

  constructor(private languageService: LanguageService) {}
  
  /**
   * Initialises the component by setting the current language,
   * loading the translations and updating the slider texts.
   * A subscription is also created to react to changes in the language.
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
    this.calculateItems();
  }


  /**
   * Event listener that reacts to the changed width.
   */
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.calculateItems();
  }


  /**
   * Updates the texts of the main slider based on the current language.
   */
  updateSliderTexts(): void {
    this.mainTopSlider = [
      this.translations.mainTopSliderText.firstSpan,
      this.translations.mainTopSliderText.secondSpan,
      this.translations.mainTopSliderText.thirdSpan,
      this.translations.mainTopSliderText.fourthSpan,
    ];
    this.calculateItems();
  }


  /**
   * Calculates how wide the screen is and how many items I need.
   */
  calculateItems(): void {
    const screenWidth = window.innerWidth;
    const itemWidth = 250;
    const minItemsNeeded = Math.ceil(screenWidth / itemWidth) + 2;
    this.repeatedSliderItems = [];
    while (this.repeatedSliderItems.length < minItemsNeeded) {
      this.repeatedSliderItems = [...this.repeatedSliderItems, ...this.mainTopSlider];
    }
  }
}
