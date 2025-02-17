import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-spoon',
  templateUrl: './spoon.component.html',
  styleUrls: ['./spoon.component.css']
})
export class SpoonComponent {


  imagesUrls: string[] = [
    'assets/img/socciete/p38.png',
    'assets/img/socciete/p21.png',
    'assets/img/socciete/p5.png',



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

