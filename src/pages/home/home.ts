
import { Component} from '@angular/core';
import { MenuController,NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { IngresoPage } from '../ingreso/ingreso';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})

export class HomePage {
 // @ViewChild(Nav) nav: Nav;
  //pages: Array<{title: string, component: any}>;
  rootPage:'IngresoPage';
  constructor(public navCtrl:NavController, public menuCtrl: MenuController) {
    this.activarMenuHome();

  }
  activarMenuHome(){
    var menus = this.menuCtrl.getMenus();
    for(var i= menus.length-1;i>=0;i--){
      
    }
    this.menuCtrl.enable(true,'menuHome');
  }

  ionViewDidEnter(){
    this.activarMenuHome();
  }
  openPage(page) {
    this.navCtrl.push(IngresoPage);
  }
  login(){
  this.navCtrl.push(IngresoPage);
}
register(){
  this.navCtrl.push(RegistroPage);
  
  }

}