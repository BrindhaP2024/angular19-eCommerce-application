import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuType: string = 'default';
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const admin = JSON.parse(sessionStorage.getItem('admin') || '{}');

    if (user && user.firstName) {
      this.userName = user.firstName;
      this.menuType = 'user';
    } else if (admin && admin.firstName) {
      this.userName = admin.firstName;
      this.menuType = 'admin';
    } else {
      this.menuType = 'default';
    }
  }

  userLogout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('email');
    this.router.navigate(['/login']);
    this.menuType = 'default';
  }
}
