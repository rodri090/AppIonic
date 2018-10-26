import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
  producto:any={
    titulo:"Cosmetico",
    imagen:"assets/img/zapatos.jpg",
    descripcion:"hermosos zapatos ideales para ti",
    precio:100,
  }
    productos:any[]=[
      {
    titulo:"Cosmetico",
    imagen:"assets/img/zapatos.jpg",
    descripcion:"hermosos zapatos ideales para ti",
    precio:100,
      },{
        titulo:"Cosmetico",
        imagen:"assets/img/zapatos.jpg",
        descripcion:"hermosos zapatos ideales para ti",
        precio:100,

      }
     

    ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

}
