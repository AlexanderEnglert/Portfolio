import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillSetTechnologiesComponent } from '../skill-set-technologies/skill-set-technologies.component';
import { LanguageService } from '../../../app/additional-function/language-change';
import { BaseComponent } from '../../additional-function/language-save-function';
import { SharedModule } from '../../additional-function/animation-share';
import { scrollToSection } from '../../additional-function/scroll-jump';

@Component({
  selector: 'app-skill-set-box',
  standalone: true,
  imports: [CommonModule, SkillSetTechnologiesComponent, SharedModule],
  templateUrl: './skill-set-box.component.html',
  styleUrl: './skill-set-box.component.scss'
})

export class SkillSetBoxComponent extends BaseComponent {
  constructor(languageService: LanguageService) {
    super(languageService);
  }
  scrollJump(sectionId: string): void {
    scrollToSection(sectionId);
  }
}
