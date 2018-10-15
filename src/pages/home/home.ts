import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { IngresoPage } from '../ingreso/ingreso';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
 }
 login(){
  this.navCtrl.push(IngresoPage);
 }

 register(){
  this.navCtrl.push(RegistroPage);
  
  }
}