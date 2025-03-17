import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '../../../app/additional-function/language-save-function';
import { LanguageService } from '../../../app/additional-function/language-change';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../additional-function/scroll-jump';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent extends BaseComponent{
  constructor(languageService: LanguageService, private navigationService: NavigationService) {
    super(languageService);
  }
  scrollToSection(sectionId: string) {
    this.navigationService.navigateAndScroll(sectionId);
  }
}
