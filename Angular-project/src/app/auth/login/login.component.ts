import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAdmin: boolean = false;
  isUser: boolean = false;
  username: string = '';
  password: string = '';
  role: string = '';
  roles: string[];
  constructor() {
    this.roles = ['admin', 'user'];
  }

  ngOnInit(): void { }
  login() {
    if (this.username === 'Ahmed' && this.password === '1234' && this.role === 'admin') {
      this.isAdmin = true;
      this.isUser = false;
    }
    else if (this.username === 'Ahmed' && this.password === '1234' && this.role === 'user') {
      this.isUser = true;
      this.isAdmin = false;
    }
    else {
      alert ("Wrong username or password.")
    }
  }
}
