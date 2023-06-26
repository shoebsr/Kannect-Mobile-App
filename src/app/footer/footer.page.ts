import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  activeTab: string = 'home'; // Initialize the active tab as 'home'

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveTab();
      }
    });
  }

  updateActiveTab() {
    const url = this.router.url;
    if (url.includes('/dashboard')) {
      this.activeTab = 'home';
    } else if (url.includes('/taskslist')) {
      this.activeTab = 'tracker';
    } else if (url.includes('/messages')) {
      this.activeTab = 'messages';
    } else if (url.includes('/profile')) {
      this.activeTab = 'profile';
    }
  }

  changeTab(tab: string) {
    this.activeTab = tab;
    switch (tab) {
      case 'home':
        this.router.navigate(['/dashboard']);
        break;
      case 'tracker':
        this.router.navigate(['/taskslist']);
        break;
      case 'messages':
        this.router.navigate(['/messages']);
        break;
      case 'profile':
        this.router.navigate(['/profile']);
        break;
    }
  }
}
