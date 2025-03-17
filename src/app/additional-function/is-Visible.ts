import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class VisibilityService {
  private visibilitySubject = new BehaviorSubject<boolean>(false);
  visibility$ = this.visibilitySubject.asObservable();

  /**
   * This function updates the visibility of the corresponding element.
   * 
   * @param isVisible 
   */
  setVisibility(isVisible: boolean) {
    this.visibilitySubject.next(isVisible); 
  }
}
