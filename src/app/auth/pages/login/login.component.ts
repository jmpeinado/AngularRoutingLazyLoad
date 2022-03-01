import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login().subscribe( user => {
      if ( user.id ) {
        this.router.navigate(['./heroes']);
      }
    });
  }

  entrarSinLogin() {
    this.loginService.logout();
    this.router.navigate(['./heroes']);
  }

}
