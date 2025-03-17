import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisibilityService } from '../../additional-function/is-Visible';
import { LanguageService } from '../../../app/additional-function/language-change';
import {TRANSLATIONS,Language,} from '../../../app/additional-function/language-translate';

@Component({
  selector: 'app-projects-pop-up-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-pop-up-slider.component.html',
  styleUrl: './projects-pop-up-slider.component.scss',
})

export class ProjectsPopUpSliderComponent {
  translations: any = {};
  currentLanguage: Language = 'en';
  projectDescription: string[] = [];
  projectName: string[] = ['Join', 'El Pollo Loco'];
  projectTools: {
    [key: number]: { image: string; name: string }[];
  } = {
    0: [
      { image: 'htmlSmallIcon.png', name: 'HTML' },
      { image: 'cssSmallIcon.png', name: 'CSS' },
      { image: 'javascriptSmallIcon.png', name: 'JavaScript' },
      { image: 'firebaseSmallIcon.png', name: 'Firebase' },
    ],
    1: [
      { image: 'htmlSmallIcon.png', name: 'HTML' },
      { image: 'cssSmallIcon.png', name: 'CSS' },
      { image: 'javascriptSmallIcon.png', name: 'JavaScript' },
    ],
  };
  projectGithub: string[] = ['Join', 'El-Pollo-Loco'];
  projectLiveTest: string[] = ['Join/index.html', 'El%20Pollo%20Loco/index.html'];
  projectImg: string[] = ['projectsJoin.png','projectsElPolloLoco.png'];
  selectedIndex: number = -1;
  isVisible: boolean = false;

  constructor(private route: ActivatedRoute, private visibilityService: VisibilityService, private languageService: LanguageService) {}

  /**
   *  Is called when the component is initialised.
   * - Subscribes to the visibility changes of the pop-up.
   * - Reads the parameters from the route and saves the selected index.
   * - Calls `languageChange()` to set the language.
   */
  ngOnInit(): void {
    this.visibilityService.visibility$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
    this.route.params.subscribe((params) => {
      this.selectedIndex = +params['index'];
    });
    this.languageChange();
    document.querySelectorAll("img").forEach(img => {
      img.onerror = () => console.error("Bild nicht gefunden:", img.src);
    });
  }


  /**
   * Closes the pop-up window and sets the scrolling of the main page back to standard.
   */
  closePopUp(): void {
    this.visibilityService.setVisibility(false);
    document.body.style.overflow = '';
  }


  /**
   * Increases the `selectedIndex` to switch to the next project.
   * If the last project is reached, the system jumps back to the first project.
   *
   * @param {number} index 
   * @returns {number} 
   */
  nextProject(index: number): number {
    this.selectedIndex = index;
    this.selectedIndex++;
    if (this.selectedIndex <= 1) {
      return this.selectedIndex;
    } else {
      this.selectedIndex = 0;
      return this.selectedIndex;
    }
  }


  /**
   * Updates the current language and sets the translations.
   * - Gets the current language from `LanguageService`.
   * - Sets `translations` based on the current language.
   * - Updates the texts in the slider.
   * - Subscribes to language changes to enable dynamic updates.
   */
  languageChange(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.translations = TRANSLATIONS[this.currentLanguage];
    this.updateSliderTexts();
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.currentLanguage = lang;
      this.translations = TRANSLATIONS[lang];
      this.updateSliderTexts();
    });
  }


  /**
   * Updates the texts of the project slider based on the current language.
   */
  updateSliderTexts(): void {
    this.projectDescription = [
      this.translations.projectSlider.projectSliderTextJoin,
      this.translations.projectSlider.projectSliderTextElPollo,
      this.translations.projectSlider.projectSliderTextDaBubble,
    ];
  }
}
