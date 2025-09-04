import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnDestroy {
  fullHeader = true;
  menuOpen = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.fullHeader = event.urlAfterRedirects !== '/';
        if (this.menuOpen) this.closeMenu();
      });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.setBodyScrollLock(this.menuOpen);
  }

  closeMenu() {
    if (!this.menuOpen) return;
    this.menuOpen = false;
    this.setBodyScrollLock(false);
  }

  private setBodyScrollLock(lock: boolean) {
    try {
      document.body.classList.toggle('no-scroll', lock);
    } catch { /* ignore */ }
  }

  ngOnDestroy() { this.setBodyScrollLock(false); }
}
