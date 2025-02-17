import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-bowls',
  templateUrl: './bowls.component.html',
  styleUrls: ['./bowls.component.css']
})
export class BowlsComponent {

  isPanierClicked: boolean = false;
  imagesUrls: string[] = [
    'assets/img/nov-img/bowl.png',
    'assets/img/socciete/p16.png',
    'assets/img/nov-img/plat.png',

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
