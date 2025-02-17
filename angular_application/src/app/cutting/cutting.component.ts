import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-cutting',
  templateUrl: './cutting.component.html',
  styleUrls: ['./cutting.component.css']
})
export class CuttingComponent {


  imagesUrls: string[] = [
    'assets/img/nov-img/planche.png',
    'assets/img/nov-img/planche-zu.png',
    'assets/img/nov-img/plancheT.png',
    'assets/img/socciete/p37.png',
    'assets/img/socciete/p35.png',
    'assets/img/socciete/xx.png',
    'assets/img/socciete/p8.png',
    'assets/img/socciete/p17.png',
    'assets/img/socciete/p18.png',


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

