import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuLink = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getAllMenu(): Observable<any> {
    return this.http.get(this.getMenuLink);
  }
  registerUser(data: any): Observable<any> {
    return this.http.post(this.getMenuLink, data);
  }
}
