import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Renderer2, } from '@angular/core';
import { BaseComponent } from '../../app/additional-function/language-save-function';
import { LanguageService } from '../../app/additional-function/language-change';
import { Language } from '../../app/additional-function/language-translate';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../app/additional-function/scroll-jump';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent extends BaseComponent implements AfterViewInit {
  isMenuVisible: boolean = false;
  screenWidth: number = window.innerWidth;
  showIntro = true;
  private hasAnimated: boolean = false;

  constructor( languageService: LanguageService, private navigationService: NavigationService, private el: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef ) {
    super(languageService);
  }

  /**
   * Initializes the component.
   * Resets animation state in localStorage and ensures the page scrolls to the top.
   */
  override ngOnInit() {
    super.ngOnInit();
    const animationPlayed = localStorage.getItem('animationPlayed');
    if (animationPlayed === null) {
      localStorage.setItem('animationPlayed', 'false');
    }
  }


  /**
   * Lifecycle hook that runs after the view has been initialized.
   * - Checks whether the animation has already been played.
   * - Adds or removes the `animationDisabled` class based on the stored state.
   * - Disables scrolling temporarily.
   * - Scrolls the page to the top.
   * - Calls `handleAnimations()` to manage animation states.
   */
  ngAfterViewInit() {
    const animationPlayed = localStorage.getItem('animationPlayed') === 'true';
    if (animationPlayed) {
      document.body.classList.add('animationDisabled');
    } else {
      document.body.classList.remove('animationDisabled');
    }
    this.disableScrolling();
    this.scrollToTop();
    this.handleAnimations();
  }


  /**
   * Disables scrolling on the page by setting `overflow: hidden`.
   */
  private disableScrolling() {
    document.body.style.overflow = 'hidden';
  }


  /**
   * Scrolls the page to the top immediately after the DOM has loaded.
   */
  private scrollToTop() {
    setTimeout(() => {
      const headerElement = document.getElementById('header');
      if (headerElement) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }, 100);
      }
    }, 100);
  }


  /**
   * Manages the animations based on whether they have already been played.
   * - If animations have already been played, all animations are disabled, and static elements are shown.
   * - Otherwise, animations are initialized and executed.
   */
  private handleAnimations() {
    const animationPlayed = localStorage.getItem('animationPlayed') === 'true';
    if (animationPlayed) {
      this.disableAllAnimations();
      this.setStaticLogoAndText();
      document.body.style.overflow = 'auto';
      return;
    }
    document.body.classList.add('animationEnabled');
    this.startTypingAnimation();
    this.startAnimations();
    setTimeout(() => {
      this.showWindow();
      document.body.style.overflow = 'auto';
    }, 7500);
    localStorage.setItem('animationPlayed', 'true');
  }


  /**
   * Disables all animations by:
   * Removing the `animationEnabled` class, Stopping typing animations, Stopping general animations,
   *  Removing the typing cursor effect, Hiding introductory elements
   */
  private disableAllAnimations() {
    document.body.classList.remove('animationEnabled');
    this.disableTypingAnimation();
    this.disableAnimations();
    this.removeTypingCursor();
    this.hideIntroElements();
  }


  /**
   * Sets the logo and text to their static positions and styles after the animation has been played.
   * Adjusts logo placement, Resizes the logo,  Sets appropriate text sizes, Ensures text visibility and Disables any remaining SVG animations
   */
  private setStaticLogoAndText() {
    const windowSize = window.innerWidth;
    const logos = document.querySelectorAll('.logoName') as NodeListOf<HTMLElement>;
    logos.forEach((logo) => {
      logo.classList.add('finalPosition');
      logo.style.animation = 'none';
      logo.style.opacity = '1';
      logo.style.display = 'flex';
      logo.style.visibility = 'visible';
      logo.style.position = 'absolute';
      logo.style.top = '14px';
      logo.style.transform = 'translate(0, 0)';
      this.setLogoPosition(windowSize, logo);
      this.setLogoSize(logo);
      this.setTextSize(logo);
    });
    this.makeTextVisible();
    this.disableSVGAnimation();
  }


  /**
   * Adjusts the position of the logo based on the window size.
   * - Moves the logo dynamically for different screen widths.
   * - Centers the logo for ultra-wide screens (>1920px).
   *
   * @param {number} windowSize
   * @param {HTMLElement} logo
   */
  private setLogoPosition(windowSize: number, logo: HTMLElement) {
    if (windowSize >= 1200 && windowSize <= 1920) {
      logo.style.right = '96px';
      logo.style.left = 'auto';
    } else if (windowSize >= 800 && windowSize < 1200) {
      logo.style.right = '48px';
      logo.style.left = 'auto';
    } else if (windowSize < 800) {
      logo.style.left = '16px';
      logo.style.right = 'auto';
    } else if (windowSize > 1920) {
      logo.style.left = 'auto';
      logo.style.right = `calc((100vw - 1920px) / 2 - 48px)`;
    }
  }


  /**
   * Style attributes are added to the svg.
   *
   * @param logo
   */
  private setLogoSize(logo: HTMLElement) {
    const svg = logo.querySelector('svg') as SVGElement;
    if (svg) {
      svg.style.height = '64px';
      svg.style.width = 'auto';
    }
  }


  /**
   * A new fontSize is added to the text.
   *
   * @param logo
   */
  private setTextSize(logo: HTMLElement) {
    const nameTextElements = logo.querySelectorAll('.nameTextFirst, .nameTextSecond') as NodeListOf<HTMLElement>;
    nameTextElements.forEach((textElement) => {
      textElement.style.fontSize = '30px';
    });
  }


  /**
   * The chip elements are made invisible.
   */
  private makeTextVisible() {
    document.querySelectorAll('.headerName .nameTextFirst, .headerName .nameTextSecond')
      .forEach((element) => {
        element.classList.add('done');
        (element as HTMLElement).style.animation = 'none';
        (element as HTMLElement).style.opacity = '1';
      });
  }


  /**
   * The character animation is blocked so that you can see the logo directly.
   */
  private disableSVGAnimation() {
    const logoPaths = document.querySelectorAll('path') as NodeListOf<SVGPathElement>;
    logoPaths.forEach((path) => {
      path.style.strokeDashoffset = '0';
      path.style.animation = 'none';
    });
  }


  /**
   * Starts the typing animation for specific elements with a controlled delay.
   */
  startTypingAnimation() {
    const isFast = localStorage.getItem('animationPlayed') === 'true';
    if (isFast) return;
    const elements = [
      { selector: '.headerName .nameTextFirst', delay: '3s' },
      { selector: '.headerName .nameTextSecond', delay: '4.5s, 6s' },
    ];
    elements.forEach(({ selector, delay }) => {
      const element = document.querySelector(selector) as HTMLElement;
      if (!element) return;
      element.style.animation = 'none';
      void element.offsetWidth;
      setTimeout(() => { element.style.animationDelay = delay; }, 10);
      this.startTypingAddDone();
    });
  }


  /**
   * Fügt die `.done` Klasse hinzu, um den blinkenden Cursor nach der Typing-Animation zu entfernen.
   * - Der erste Text hört 2 Sekunden früher auf als der zweite.
   */
  startTypingAddDone() {
    if (localStorage.getItem('animationPlayed') === 'true') return;
    setTimeout(() => {
      document.querySelectorAll('.headerName .nameTextFirst').forEach((element) => element.classList.add('done'));
    }, 4500);
    setTimeout(() => {
      document.querySelectorAll('.headerName .nameTextSecond').forEach((element) => element.classList.add('done'));
    }, 6500);
  }


  /**
   * A class is added to each element.
   */
  private removeTypingCursor() {
    document.querySelectorAll( '.headerName .nameTextFirst, .headerName .nameTextSecond')
    .forEach((element) => element.classList.add('done'));
  }


  /**
   * Hides intro elements if the animation has already been played.
   */
  private hideIntroElements() {
    const fullscreenOverlay = document.querySelector('.fullscreen-overlay') as HTMLElement;
    if (fullscreenOverlay) { fullscreenOverlay.style.display = 'none'; }
  }


  /**
   * Disables the typing animation by removing the associated class.
   */
  disableTypingAnimation() {
    const nameFirst = document.querySelector('.headerName .nameTextFirst');
    const nameSecond = document.querySelector('.headerName .nameTextSecond');
    if (nameFirst && nameSecond) {
      nameFirst.classList.remove('typingAnimation');
      nameSecond.classList.remove('typingAnimation');
    }
  }


  /**
   * Toggles animation states for various elements.
   *
   * @param {boolean} add
   */
  private toggleAnimation(add: boolean) {
    if (localStorage.getItem('animationPlayed') === 'true') {
      document.querySelectorAll('.animationActive').forEach((el) => el.classList.remove('animationActive'));
      return;
    }
    const elements = {
      fullscreenOverlays: document.querySelectorAll('.fullscreen-overlay'),
      logoNames: document.querySelectorAll('.logoName'),
      headerNames: document.querySelectorAll('.headerName'),
      svgWrapper: document.querySelectorAll('.svg-wrapper'),
    };
    Object.values(elements).forEach((nodeList) => {
      nodeList.forEach((element) => { element.classList.toggle('animationActive', add);});
    });
  }


  /**
   * Starts all animations by enabling the respective classes.
   */
  startAnimations() {
    this.toggleAnimation(true);
  }


  /**
   * Disables all animations by removing the respective classes.
   */
  disableAnimations() {
    this.toggleAnimation(false);
  }


  /**
   * Positions the logo correctly after animation based on screen width.
   */
  showWindow() {
    const windowScreen = window.innerWidth;
    const headerLogo = this.el.nativeElement.querySelector('.logoName.headerLogo');
    if (headerLogo && !this.hasAnimated) {
      this.hasAnimated = true;
      if (windowScreen < 801) {
        setTimeout(() => {
          this.renderer.addClass(headerLogo, 'finalPosition');
        }, 200);
      } else {
        setTimeout(() => {
          this.renderer.addClass(headerLogo, 'finalPosition');
        }, 2000);
      }
    }
  }


  /**
   * Reacts to changes in the window size and updates the `screenWidth` variable.
   *
   * @param {Event} event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
    if (localStorage.getItem('animationPlayed') !== 'true') {
      localStorage.setItem('animationPlayed', 'true');
    }
    this.startTypingAnimation();
    this.startAnimations();
    this.handleAnimations();
  }


  /**
   * Changes the current language of the application.
   *
   * @param {Language} lang
   */
  changeLanguage(lang: Language): void {
    localStorage.removeItem('selectedLanguage');
    localStorage.setItem('selectedLanguage', lang);
    this.languageService.setLanguage(lang);
  }


  /**
   * Switches the visibility flag of the menu.
   * If the menu is visible, it is hidden, otherwise it is displayed.
   */
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }


  /**
   * - If the navigation menu is open (`isMenuVisible` is `true`), it will be closed after scrolling.
   *
   * @param {string} sectionId
   */
  scrollToSection(sectionId: string) {
    this.navigationService.navigateAndScroll(sectionId);
    if (this.isMenuVisible) {
      this.isMenuVisible = false;
    }
  }
}
