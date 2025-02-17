import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ArtComponent } from './art/art.component';
import { ProductsComponent } from './products/products.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { CreateAcountComponent } from './create-acount/create-acount.component';
import { SearchInterfaceComponent } from './search-interface/search-interface.component';
import { BowlsComponent } from './bowls/bowls.component';
import { CuttingComponent } from './cutting/cutting.component';
import { DecoTableComponent } from './deco-table/deco-table.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ServingComponent } from './serving/serving.component';
import { SpoonComponent } from './spoon/spoon.component';
import { TableTopComponent } from './table-top/table-top.component';
import { PanierService } from './panier.service';
const routes: Routes = [
  {path:' ',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'art',component:ArtComponent},
  {path:'connecter',component:ConnecterComponent},
  {path:'create_acount',component:CreateAcountComponent},
  {path:'search',component:SearchInterfaceComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/Bowls',component:BowlsComponent},
  {path:'products/cutting_Board',component:CuttingComponent},
  {path:'products/Deco_Table',component:DecoTableComponent},
  {path:'products/kitchen_Accessories',component:KitchenComponent},
  {path:'products/serving_platters',component:ServingComponent},
  {path:'products/spoon',component:SpoonComponent},
  {path:'products/Table_Top',component:TableTopComponent},
  {path:'panier/service',component:PanierService }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
