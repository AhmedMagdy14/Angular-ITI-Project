import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;
  // term: string;
  constructor(private userData: MenuService) {
    userData.getAllMenu().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {}
}
