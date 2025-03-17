import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { VisibilityService } from '../../additional-function/is-Visible';
import { BaseComponent } from '../../../app/additional-function/language-save-function';
import { LanguageService } from '../../../app/additional-function/language-change';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})

export class ProjectsComponent extends BaseComponent implements AfterViewInit{
  @ViewChildren('projectItem') projectItems!: QueryList<ElementRef>;
  isVisible: boolean = false;
  vector = `<span class="greenVector">|</span>`;
  projectName: string[] = ['Join', 'El Pollo Loco'];
  projectTools: string[] = [
    `HTML ${this.vector} CSS ${this.vector} Javascript ${this.vector} Firebase`,
    `HTML ${this.vector} CSS ${this.vector} Javascript`,
  ];
  projectImg: string[] = [
    'projectsJoin.png',
    'projectsElPolloLoco.png',
  ];

  constructor(private router: Router, private visibilityService: VisibilityService, languageService: LanguageService) {
    super(languageService);
  }

  /**
   * Calculates the margin-top based on the index.
   *
   * @param {number} index
   * @returns {string}
   */
  getMarginTop(index: number): string {
    if (index === 0) {
      return '96px';
    } else if (index >= 1 && index <= 3) {
      return '48px';
    } else if (index === 4) {
      return '0px';
    }
    return '0px';
  }


  /**
   * Opens a pop-up window and navigates to the corresponding project page.
   *
   * @param {number} index
   */
  openPopUpWindow(index: number): void {
    this.visibilityService.setVisibility(true);
    this.router.navigate(['/projects', index]);
    document.body.style.overflow = 'hidden';
  }

  
  /**
  * Lifecycle hook that runs after the component's view has been initialized.
  * Uses an `IntersectionObserver` to detect when elements are in the viewport
  * and adds a "visible" class for animations or styling effects.
  */
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    this.projectItems.forEach((item) => observer.observe(item.nativeElement));
  }
}
