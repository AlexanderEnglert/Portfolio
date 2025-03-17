import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me-section/about-me/about-me.component';
import { SkillSetBoxComponent } from "./skill-set-section/skill-set-box/skill-set-box.component";
import { ColleaguesSliderComponent } from './colleagues-slider-section/colleagues-slider/colleagues-slider.component';
import { FooterComponent } from './footer-section/footer/footer.component';
import { ProjectsPopUpSliderComponent } from './projects-section/projects-pop-up-slider/projects-pop-up-slider.component';
import { MainTopPartComponent } from './main-top-section/main-top-part/main-top-part.component';
import { ContactMeComponent } from './contact-me-section/contact-me/contact-me.component';
import { ProjectsComponent } from './projects-section/projects/projects.component';
import { HeaderComponent } from './header-section/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule, MainTopPartComponent, AboutMeComponent, SkillSetBoxComponent, ColleaguesSliderComponent, 
    ContactMeComponent, FooterComponent, ProjectsPopUpSliderComponent, RouterOutlet, ProjectsComponent, HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Portfolio';
  showLegalNotice = false;
  showPrivacyPolicy = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showLegalNotice = currentRoute === '/legal-notice';
      this.showPrivacyPolicy = currentRoute === '/privacy-policy';
    });
  }
}
