import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-deco-table',
  templateUrl: './deco-table.component.html',
  styleUrls: ['./deco-table.component.css']
})
export class DecoTableComponent {


  imagesUrls: string[] = [
    'assets/img/socciete/p12.png',
    'assets/img/socciete/p23.png',
    'assets/img/socciete/p42.png',
    'assets/img/socciete/p41.png',
    'assets/img/socciete/p39.png',
    'assets/img/socciete/p13.png',
    'assets/img/socciete/p10.png',
    'assets/img/socciete/p15.png',



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

  isPanierClicked: boolean = false;
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

