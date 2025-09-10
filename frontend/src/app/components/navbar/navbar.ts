import { Component, OnDestroy, signal, computed } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TuiAccordion } from '@taiga-ui/kit';

interface NavLink {
  readonly label: string;
  readonly link: string;
  readonly fragment?: string;
}

interface MobileGroup {
  readonly label: string;
  readonly primaryLink: string;
  readonly items: readonly NavLink[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, TuiAccordion],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnDestroy {
  fullHeader = true;
  menuOpen = false;
  activeMobileIndex = signal<number | null>(null);

  readonly desktopLinks: readonly NavLink[] = [
    { label: 'Início', link: '/' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Ensino', link: '/ensino' },
    { label: 'Pesquisa', link: '/pesquisa' },
    { label: 'Extensão', link: '/extensao' },
    { label: 'Checklist', link: '/checklist' },
  ];

  readonly mobileGroups: readonly MobileGroup[] = [
    {
      label: 'Sobre',
      primaryLink: '/sobre',
      items: [
        { label: 'Missão & Visão', link: '/sobre', fragment: 'missoa-visao' },
        { label: 'Equipe', link: '/sobre', fragment: 'equipe' },
        { label: 'Código de Conduta', link: '/conduta'}
      ]
    },
    {
      label: 'Ensino',
      primaryLink: '/ensino',
      items: [
        { label: 'Graduação', link: '/ensino', fragment: 'graduacao' },
        { label: 'Pós-graduação', link: '/ensino', fragment: 'pos' },
        { label: 'Projeto PID', link: '/ensino', fragment: 'pid' }
      ]
    },
    {
      label: 'Pesquisa',
      primaryLink: '/pesquisa',
      items: [
        { label: 'Projeto de Pesquisa', link: '/pesquisa', fragment: 'projeto' },
        { label: 'Iniciação Científica', link: '/pesquisa', fragment: 'ic' },
        { label: 'Iniciação Tecnológica', link: '/pesquisa', fragment: 'it' },
        { label: 'PET Saúde Digital', link: '/pesquisa', fragment: 'pet' }
      ]
    },
    {
      label: 'Extensão',
      primaryLink: '/extensao',
      items: [
        { label: 'Projeto', link: '/extensao', fragment: 'projeto' },
        { label: 'Eventos', link: '/extensao', fragment: 'eventos' }
      ]
    }
  ];

  readonly hasOverlay = computed(() => this.menuOpen);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(ev => ev instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        this.fullHeader = ev.urlAfterRedirects !== '/';
        if (this.menuOpen) this.closeMenu();
      });
  }

  trackByLabel(_i: number, item: NavLink) { return item.label; }
  trackByGroup(_i: number, g: MobileGroup) { return g.label; }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.setBodyScrollLock(this.menuOpen);
    if (!this.menuOpen) this.activeMobileIndex.set(null);
  }

  closeMenu() {
    if (!this.menuOpen) return;
    this.menuOpen = false;
    this.setBodyScrollLock(false);
    this.activeMobileIndex.set(null);
  }

  toggleMobileSection(i: number) {
    const current = this.activeMobileIndex();
    this.activeMobileIndex.set(current === i ? null : i);
  }

  private setBodyScrollLock(lock: boolean) {
    document.documentElement.style.overflow = lock ? 'hidden' : '';
  }

  ngOnDestroy() {
    this.setBodyScrollLock(false);
  }
}
