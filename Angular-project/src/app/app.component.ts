import { Component } from '@angular/core';
import { MenuService } from './menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Angular-project';
  // users: any;
  // constructor(private userData: MenuService) {
  //   userData.getAllMenu().subscribe((data) => {
  //     this.users = data;
  //   });
  // }
  // getUserFromData(data: any) {
  //   this.userData.saveUsers(data).subscribe((result) => {
  //     console.warn(result);
  //   })
  // }
}
