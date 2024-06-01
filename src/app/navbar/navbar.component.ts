import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false; 

  constructor(private router: Router) {}

  logout() {
    // Implement your logout logic here, like clearing user session data
    alert('Logout successfully !');
    this.router.navigate(['']); // Navigate to home page after logout
  }
}
