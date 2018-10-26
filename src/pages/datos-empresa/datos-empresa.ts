import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaPage} from '../categoria/categoria';


@IonicPage()
@Component({
  selector: 'page-datos-empresa',
  templateUrl: 'datos-empresa.html',
})
export class DatosEmpresaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosEmpresaPage');
  }

   Subir() {
    this.navCtrl.push(CategoriaPage);
    }
}
