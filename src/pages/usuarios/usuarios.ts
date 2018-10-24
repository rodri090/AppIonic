import { Component,} from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Editar Usuarios',
      buttons: [
        {
          text: 'Crear nuevo Usuario',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          },
        
        },{
          text: 'Editar',
          handler: () => {
            console.log('Archive clicked');
          },},{
            text: 'Guardar',
            handler: () => {
              console.log('Archive clicked');
            },},{
              text: 'Eliminar',
              role:'destructive',
              handler: () => {
                console.log('Archive clicked');
              },

        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
}
