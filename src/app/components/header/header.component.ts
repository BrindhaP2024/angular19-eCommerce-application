import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports:[RouterOutlet,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  userName: string = '';  // To hold the user's first name

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');

    if (user && user.firstName) {
      this.userName = user.firstName;
      console.log(this.userName);
      this.menuType = 'user';
    } else {
      this.menuType = 'default';
    }
  }


  userLogout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('email');
    this.router.navigate(['/login']);
    this.menuType = 'default';
    // alert("You have logged out! Please visit again!!");
  }
}
