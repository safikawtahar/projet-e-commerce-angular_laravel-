import { Component,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Produit } from '../produit';
import { FormsModule } from '@angular/forms'; 
import { MatDialog } from '@angular/material/dialog';
import { CreateProductFormComponent } from '../create-product-form/create-product-form.component';
import { UpdateProductFormComponent } from '../update-product-form/update-product-form.component';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  produits:any;
  
  produit = new Produit() ;
  showForm: boolean = false;
  selectedProduct: any;
  
   constructor(private dataService:DataService,private dialog: MatDialog){}
  
  ngOnInit():void{
   this.getProduitData();
  }
  
  getProduitData(){
    this.dataService.getData().subscribe(res=> {
  this.produits=res;
    } );
  }
  insertData(){
     
    this.dataService.insertData(this.produit).subscribe(res=> {
      this.getProduitData();
      this.showForm = false; // Masquer le formulaire après l'ajout

    } )
  }
  deleteData(id_prod: number){ 
     this.dataService.deleteData(id_prod).subscribe(res=> {
    this.getProduitData();
      } );
    }



    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        this.produit.image = file; // Stockez le fichier dans la propriété Image_Produit
      }
    }
   
  
    openCreateModal(): void {
      const dialogRef = this.dialog.open(CreateProductFormComponent, {
        width: '500px', // Définissez la largeur du modal selon vos besoins
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Vous pouvez ajouter ici des actions à effectuer après la fermeture du modal, si nécessaire
      });
    }
    openUpdateModal(product: any): void {
      const dialogRef = this.dialog.open(UpdateProductFormComponent, {
        width: '500px', // Définissez la largeur du modal selon vos besoins
        data: { product: product } // Passez les données du produit à mettre à jour au composant du formulaire de mise à jour
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Vous pouvez ajouter ici des actions à effectuer après la fermeture du modal, si nécessaire
      });
    }
    onProductCreated(newProduct: any) {
      this.produits.push(newProduct);
    }
}
