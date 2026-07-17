import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private activeSectionId = new BehaviorSubject<string>('inicio');
  activeSectionId$ = this.activeSectionId.asObservable();

  setActiveSection(id: string) {
    this.activeSectionId.next(id);
  }
}
