import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ DatosEmpresaPage} from '../datos-empresa/datos-empresa';
/**
 * Generated class for the VendedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendedor',
  templateUrl: 'vendedor.html',
})
export class VendedorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendedorPage');
  }
  DatosE(){
    this.navCtrl.push(DatosEmpresaPage);
  }
}
