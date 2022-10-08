import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../menu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  isSubmitted: boolean = false;
  register = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private restro: MenuService) {}
  ngOnInit(): void {}
  collection() {
    this.restro.registerUser(this.register.value).subscribe((result) => {
      console.warn('Result', result);
      this.isSubmitted = true;
    });
  }
}
