import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private misHeroes: Heroe[] = [
    { nombre: 'Superman', color: 'azul', vuela: true, img: 'https://media.gettyimages.com/photos/very-definition-of-a-hero-picture-id501973090?s=2048x2048'},
    { nombre: 'Spiderman', color: 'azul/rojo', vuela: false, img: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/51/3/main-700b9bff30_11_1000x528.jpeg'},
    { nombre: 'Linterna verde', color: 'verde', vuela: false, img: 'http://4.bp.blogspot.com/-J5HgjQrCf0U/TZt30UV0ypI/AAAAAAAABHM/gkLGh3hAjRc/s1600/Linterna+Verde01.jpg'},
    { nombre: 'Batman', color: 'negro', vuela: false, img: 'http://pngimg.com/uploads/batman/batman_PNG92.png'},
    { nombre: 'Hulk', color: 'verde', vuela: false, img: 'http://pngimg.com/uploads/hulk/hulk_PNG124.png'},
    { nombre: 'Ironman', color: 'rojo', vuela: true, img: 'https://toppng.com/uploads/preview/iron-man-front-11549476851guphsun5ez.png'},
    { nombre: 'Catwoman', color: 'negro', vuela: false, img: 'https://www.tonica.la/__export/1605212212783/sites/debate/img/2020/11/12/zack-snyder-revela-quien-habrxa-elegido-catwoman.jpg_463833556.jpg'}
  ];

  constructor() { }

  // simulamos la llamada rest construyendo un observable
  getHeroes(): Observable<Heroe[]> {
    return of( this.misHeroes );
  }
}
