import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .btn-logout {
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .usuario-label {
      position: absolute;
      right: 150px;
      top: 23px;
      font-weight: 600;
      font-size: 16px;
      color: #333;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  usuarioName: string | undefined;

  constructor(private router: Router,
              private loginService: AuthService) { }

  ngOnInit(): void {
    this.usuarioName = this.loginService.auth.usuario;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['./auth']);
  }

}
