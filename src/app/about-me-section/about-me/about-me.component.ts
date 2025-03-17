import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../../../app/additional-function/language-save-function';
import { LanguageService } from '../../../app/additional-function/language-change';
import { SharedModule } from '../../additional-function/animation-share';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent extends BaseComponent  {
  constructor(languageService: LanguageService) {
    super(languageService);
  }
}
