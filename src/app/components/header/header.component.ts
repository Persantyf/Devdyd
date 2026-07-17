import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  activeSectionId = 'inicio';
  currentLang = 'es';
  private sub?: Subscription;

  constructor(
    private scrollService: ScrollService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.sub = this.scrollService.activeSectionId$.subscribe(
      (id) => (this.activeSectionId = id)
    );
    this.checkScroll();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  isLangOpen = false;

  readonly langs = [
    { code: 'es', flag: 'https://flagcdn.com/w40/es.png', label: 'Español' },
    { code: 'en', flag: 'https://flagcdn.com/w40/gb.png', label: 'English' },
  ];

  get activeLang() {
    return this.langs.find(l => l.code === this.currentLang)!;
  }

  toggleLangDropdown() {
    this.isLangOpen = !this.isLangOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (!target.closest('.lang-dropdown')) {
      this.isLangOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  isActive(sectionId: string): boolean {
    return this.activeSectionId === sectionId;
  }

  setLang(lang: string) {
    this.currentLang = lang;
    this.isLangOpen = false;
    this.translate.use(lang);
  }
}
