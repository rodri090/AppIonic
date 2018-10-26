import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { VendedorPage } from '../vendedor/vendedor';
import { ProductosPage} from '../productos/productos';




@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
 
})
export class RegistroPage {
  constructor(public navCtrl: NavController) {
    
  }
 RegistroVe(){
  this.navCtrl.push(VendedorPage)
 }
 IngresoP(){
  this.navCtrl.push(ProductosPage);
 }
}


