import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
    .img-heroe {
      width: 300px;
    }
    .label-title {
      display: block;
      font-family: 'arial';
      font-size: 16px;
    }
    `
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];
  
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( heroes => {
      this.heroes = heroes;
    });
  }

}
