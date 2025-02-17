import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-serving',
  templateUrl: './serving.component.html',
  styleUrls: ['./serving.component.css']
})
export class ServingComponent {


  imagesUrls: string[] = [
    'assets/img/socciete/p3.png',
    'assets/img/socciete/p4.png',



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

