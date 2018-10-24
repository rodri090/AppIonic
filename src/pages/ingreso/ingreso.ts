import { Component } from '@angular/core';
import {  MenuController, IonicPage, NavController } from 'ionic-angular';
import { UsuariosPage } from'../usuarios/usuarios';
import { VendedorPage } from'../vendedor/vendedor';
@IonicPage()
@Component({
  selector: 'page-ingreso',
  templateUrl: 'ingreso.html',
  
})
export class IngresoPage {
  
  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {
  
  }
  activarMenuPage2() {
    var menus = this.menuCtrl.getMenus();
    for (var i = menus.length - 1; i >= 0; i--) {
        menus[i].enabled = false;
    }
    this.menuCtrl.enable(true,'menuPage2'); 
  }

  ionViewDidEnter(){
    this.activarMenuPage2();
  }

  openPage() {
    this.navCtrl.push(IngresoPage);
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresoPage');
  
    }
    usuario(){
      this.navCtrl.push(UsuariosPage);
    }
    administrador(){
      this.navCtrl.push(VendedorPage);
    }

  }

  

