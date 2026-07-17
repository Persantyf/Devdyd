import { Component, AfterViewInit } from '@angular/core';
import { HeroComponent }    from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent }   from '../../components/about/about.component';
import { WhyUsComponent }   from '../../components/why-us/why-us.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ScrollService }    from '../../services/scroll.service';

declare const lucide: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, AboutComponent, WhyUsComponent, ContactComponent],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-about></app-about>
    <app-why-us></app-why-us>
    <app-contact></app-contact>
  `,
})
export class HomeComponent implements AfterViewInit {
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    this.setupSectionObserver();
    this.setupFadeObserver();
  }

  private setupSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) this.scrollService.setActiveSection(e.target.id);
      }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
  }

  private setupFadeObserver() {
    const observer = new IntersectionObserver(
      (entries, obs) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  }
}
