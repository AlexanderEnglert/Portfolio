import { CommonModule } from '@angular/common';
import { Component,ElementRef,AfterViewInit,ViewChildren,QueryList,ViewChild, } from '@angular/core';
import { BaseComponent } from '../../additional-function/language-save-function';
import { LanguageService } from '../../additional-function/language-change';

@Component({
  selector: 'app-skill-set-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set-technologies.component.html',
  styleUrl: './skill-set-technologies.component.scss',
})
export class SkillSetTechnologiesComponent
  extends BaseComponent
  implements AfterViewInit
{
  skillIcons: string[] = [ 'htmlIcon', 'cssIcon', 'javascriptIcon', 'materialDesignIcon', 'typeScriptIcon', 'angularIcon', 'firebaseIcon', 'gitIcon', 'restApiIcon', 'scrumIcon',];
  skillIconsText: string[] = [ 'HTML', 'CSS', 'JavaScript', 'Material <br> Design', 'TypeScript', 'Angular', 'Firebase', 'GIT', 'Rest-Api', 'Scrum',];
  @ViewChildren('skillItem') skillItems!: QueryList<ElementRef>;
  @ViewChild('growthMindsetItem', { static: false })
  growthMindsetItem!: ElementRef;
  constructor(languageService: LanguageService) {
    super(languageService);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    this.skillItems.forEach((item) => observer.observe(item.nativeElement));
    if (this.growthMindsetItem) {
      observer.observe(this.growthMindsetItem.nativeElement);
    }
  }
}
