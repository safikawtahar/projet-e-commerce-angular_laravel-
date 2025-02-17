import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProduitComponent } from './produit/produit.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomComponent } from './welcom/welcom.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ArtComponent } from './art/art.component';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateAcountComponent } from './create-acount/create-acount.component';
import { SearchInterfaceComponent } from './search-interface/search-interface.component';
import { ProductsComponent } from './products/products.component';
import { BowlsComponent } from './bowls/bowls.component';
import { CuttingComponent } from './cutting/cutting.component';
import { DecoTableComponent } from './deco-table/deco-table.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ServingComponent } from './serving/serving.component';
import { SpoonComponent } from './spoon/spoon.component';
import { TableTopComponent } from './table-top/table-top.component';
import { ListeComponent } from './liste/liste.component';
import { OrderComponent } from './order/order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateProductFormComponent } from './create-product-form/create-product-form.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const appRoutes:Routes = [
  { path : '', component: HomeComponent},
  { path : 'admin', component: ProduitComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProduitComponent,
    ContactComponent,
    WelcomComponent,
    HeaderComponent,
    FooterComponent,
    ConnecterComponent,
    ArtComponent,
    CreateAcountComponent,
    SearchInterfaceComponent,
    ProductsComponent,
    BowlsComponent,
    CuttingComponent,
    DecoTableComponent,
    KitchenComponent,
    ServingComponent,
    SpoonComponent,
    TableTopComponent,
    ListeComponent,
    OrderComponent,
    CreateProductFormComponent,
    UpdateProductFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
