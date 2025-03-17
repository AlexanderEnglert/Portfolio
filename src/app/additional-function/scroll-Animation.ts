import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})

export class ScrollAnimationDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  /**
  * Lifecycle hook: Is called after the view has been initialised.
  * Starts the observation of the element to trigger the scroll animation.
  */
  ngAfterViewInit(): void {
      this.observeElement();
  }


  /**
  * Observes the element with the Intersection Observer.
  * - Adds the class `animate-box` if the element is 30% visible.
  * Stops the observation after the first activation to optimise performance.
  */
  private observeElement(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('animate-box');
            observer.unobserve(this.el.nativeElement); 
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(this.el.nativeElement);
  }
}
