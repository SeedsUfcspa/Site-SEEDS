import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent implements OnDestroy {

  fullHeader = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.fullHeader = event.urlAfterRedirects !== '/';
      });
  }

  private _menuOpen = false;
  get menuOpen() { return this._menuOpen; }
  set menuOpen(val: boolean) {
    this._menuOpen = val;
    this.setBodyScrollLock(val);
  }

  closeMenu() {
    this.menuOpen = false;
  }

  private setBodyScrollLock(lock: boolean) {
    try {
      document.body.style.overflow = lock ? 'hidden' : '';
    } catch {
      // safe fallback for non-browser environments
    }
  }

  ngOnDestroy() {
    this.setBodyScrollLock(false);
  }
}
