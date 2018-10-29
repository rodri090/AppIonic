import { Component, ViewChild } from '@angular/core';
import {  MenuController, IonicPage, NavController,NavParams  } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UsuariosPage } from'../usuarios/usuarios';
import { VendedorPage } from'../vendedor/vendedor';
@IonicPage()
@Component({
  selector: 'page-ingreso',
  templateUrl: 'ingreso.html',
  
})
export class IngresoPage {
  @ViewChild('username') user;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController, public menuCtrl:MenuController,public navParams: NavParams, public alertCtrl: AlertController) {
  
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
    //usuario(){
    //  this.navCtrl.push(UsuariosPage);
    //}
    administrador(){
      this.navCtrl.push(VendedorPage);
    }

    login(){
      if(this.user.value=="jose"&& this.password.value=="1234"){
        this.navCtrl.push(UsuariosPage);
      }else{
        let alert=this.alertCtrl.create({
          title:'Datos incorrectos',
          subTitle:'los datos ingresados son incorrectos.',
          buttons:['OK']
        });
        alert.present();
      }
    }

  }

  

