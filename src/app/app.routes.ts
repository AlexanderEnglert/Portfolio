import { Routes } from '@angular/router';
import { ProjectsPopUpSliderComponent } from './projects-section/projects-pop-up-slider/projects-pop-up-slider.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: 'projects/:index', component: ProjectsPopUpSliderComponent },
  {path: 'legal-notice', component: LegalNoticeComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
