import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Simulamos la llamada para recuperar usuario
  private usuario: Auth = {usuario: 'Javi m', email: 'javim@jm.com', id: '10'};
  private _auth: Auth | undefined;
  get auth() {
    return {...this._auth}; // se desestructura para no tocar el _auth
  }

  constructor() { }

  login() {
    return of( this.usuario )
      .pipe(
        tap( resp => {
          this._auth = resp;
          localStorage.setItem('token', this.usuario.id);
        })
    );
  }

  verificaAutenticacion(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) {
      return of(false);
    }

    return of( this.usuario )
      .pipe(
        map( auth => {
          this._auth = auth;
          return true;
        })
      );

  }

  logout() {
    this._auth = undefined;
    console.log('LOGOUT', this._auth);
  }
}
