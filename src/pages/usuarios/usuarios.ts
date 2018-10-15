import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public myModal:ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }
  showmodal(){
    const mydata= {
      name:"jose",
      number:"123"
    };
    const modal=this.myModal.create('ModalPage',{data:mydata})
    modal.present();
    
  }
}
