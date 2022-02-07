import { Component, OnInit } from '@angular/core';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  slides = [
    {'image': 'https://media-cdn.tripadvisor.com/media/photo-s/17/7e/c1/88/cafeteria-armenia.jpg'},
    {'image': 'https://www.emprendedores.es/wp-content/uploads/2016/01/pasos-para-montar-tu-bar-o-cafeteria.jpg'},
    {'image': 'https://www.consumoteca.com/wp-content/uploads/Restaurante-cafeter%C3%ADa.jpeg'}
  ];

}