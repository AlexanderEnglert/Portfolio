import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class NavigationService {
  constructor(private router: Router) {}

  /**
  * Navigates to the homepage (`'/'`) and then smoothly scrolls to the specified section.
  *
  * @param {string} sectionId - The ID of the section to scroll to after navigation.
  */
  navigateAndScroll(sectionId: string) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      });
    }
  }


  /**
   * Scrolls smoothly to the specified section of the page.
   * - Uses `scrollIntoView()` for smooth scrolling.
   * @param {string} sectionId
   */
  export function scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }
