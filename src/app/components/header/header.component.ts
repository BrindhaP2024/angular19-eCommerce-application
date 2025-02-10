import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports:[CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  userName: string = '';
  cartItems = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('user')) {
      const userData = JSON.parse(sessionStorage.getItem('user') || '{}');
      this.userName = userData.name;
      this.menuType = 'user';
    } else {
      this.menuType = 'default';
    }
  }

  userLogout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
