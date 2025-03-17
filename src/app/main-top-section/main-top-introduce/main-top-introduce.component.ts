import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../app/additional-function/language-save-function';
import { LanguageService } from '../../../app/additional-function/language-change';
import { scrollToSection } from '../../additional-function/scroll-jump';

@Component({
  selector: 'app-main-top-introduce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-top-introduce.component.html',
  styleUrl: './main-top-introduce.component.scss',
})

export class MainTopIntroduceComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('nameTitle', { static: false }) nameTitle!: ElementRef;
  @ViewChild('jobTitle', { static: false }) jobTitle!: ElementRef;
  private animationKey = 'animationPlayed';

  constructor(languageService: LanguageService) {
    super(languageService);
  }

  /**
   * Lifecycle hook that is called after Angular has fully initialized the view.
   * It triggers the animation handling logic.
   */
  ngAfterViewInit() {
    this.handleAnimation();
  }


  /**
   * Handles the animation logic by checking if it has already been played.
   * If the animation has been played before (stored in localStorage),
   * it prevents it from playing again by adding a 'noAnimation' class to the elements.
   */
  private handleAnimation() {
    if (!this.nameTitle || !this.jobTitle) {
      return;
    }
    const animationPlayed = localStorage.getItem(this.animationKey);
    if (animationPlayed === 'true') {
      this.nameTitle.nativeElement.classList.add('noAnimation');
      this.jobTitle.nativeElement.classList.add('noAnimation');
    }else{
      this. stopBlinking();
    }
  }


  /**
   * Stops the blinking cursor effect after the typing animation is completed.
   * The job title stops blinking 2 seconds earlier than the name.
   */
  stopBlinking() {
    setTimeout(() => {  
      document.querySelector('.nameStyle span')?.classList.add('done'); 
    }, 13500);
    setTimeout(() => {
      document.querySelector('.jobTitle')?.classList.add('done'); 
    }, 11200);
  }


  /**
   * Scrolls to a specific section of the page.
   *
   * @param {string} sectionId
   */
  scrollJump(sectionId: string): void {
      scrollToSection(sectionId);
    }
  }
