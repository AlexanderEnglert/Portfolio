import { NgModule } from '@angular/core';
import { ScrollAnimationDirective } from '../additional-function/scroll-Animation';

@NgModule({
  declarations: [ScrollAnimationDirective],
  exports: [ScrollAnimationDirective] 
})
export class SharedModule {}