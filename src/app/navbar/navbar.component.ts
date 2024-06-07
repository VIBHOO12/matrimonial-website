import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false; 
 
  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      // Check if navigation event is NavigationStart
      if (event instanceof NavigationStart) {
        // Check if user is not logged in and navigation is not to login page
        if (!this.isLoggedIn && event.url !== '/') {
          // Redirect to login page
          this.router.navigate(['']);
        }
      }
    });
  }

  logout() {
    // Implement your logout logic here, like clearing user session data
    alert('Logout successfully !');
    this.router.navigate(['']); // Navigate to home page after logout
  }
  isSubMenuOpen: boolean = false;

  toggleMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
    console.log('Toggle menu called. Submenu is now open: ', this.isSubMenuOpen);
  }
}



