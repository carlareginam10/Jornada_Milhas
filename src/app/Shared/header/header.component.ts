import { Component } from '@angular/core';
import { UserService } from 'src/app/Core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private router : Router
  ){

  }
  user$ = this.userService.retornarUser();

  logout(){
    this.userService.logout();
    this.router.navigate(['/login'])
  }
}


