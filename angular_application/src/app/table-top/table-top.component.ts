import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-table-top',
  templateUrl: './table-top.component.html',
  styleUrls: ['./table-top.component.css']
})
export class TableTopComponent {
  isPanierClicked: boolean = false;

  imagesUrls: string[] = [
    'assets/img/socciete/p9.png',
    'assets/img/socciete/p11.png',
    'assets/img/socciete/p14.png',
    'assets/img/socciete/p20.png',
    'assets/img/socciete/p16.png',
    'assets/img/socciete/p30.png',
    'assets/img/socciete/p27.png',
    'assets/img/nov-img/oval.png',
    'assets/img/nov-img/s6.png',
    // Ajoutez autant d'URLs que nécessaire
  ]; 

  toggleColor(link: string) {
    this.resetColors(); // Réinitialise toutes les couleurs
    switch (link) {
  
      case 'panier':
        this.isPanierClicked = true;
        break;

    }
  }

  resetColors() {

    this.isPanierClicked = false;

  }


  isImageVisible: boolean = false;

  toggleImage(): void {
    this.isImageVisible = !this.isImageVisible;
  }
  isFullscreen: boolean = false;

  currentImageUrl: string = '';
  fullscreenImage: string = '';

  toggleFullscreen(imageUrl: string): void {
    this.isFullscreen = !this.isFullscreen;
    this.currentImageUrl = imageUrl;
  }
  constructor(private panierService: PanierService) { }

  addToCart() {
    this.panierService.incrementCount();
  }
}
