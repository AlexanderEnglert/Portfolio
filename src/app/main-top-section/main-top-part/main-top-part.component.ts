import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainTopIntroduceComponent } from '../main-top-introduce/main-top-introduce.component';
import { MainTopContactComponent } from '../main-top-contact/main-top-contact.component';
import { MainTopSliderComponent } from '../main-top-slider/main-top-slider.component';

@Component({
  selector: 'app-main-top-part',
  standalone: true,
  imports: [CommonModule, MainTopIntroduceComponent, MainTopContactComponent,MainTopSliderComponent],
  templateUrl: './main-top-part.component.html',
  styleUrl: './main-top-part.component.scss'
})

export class MainTopPartComponent {}
