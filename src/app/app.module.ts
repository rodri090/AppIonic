import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import{ VendedorPage } from '../pages/vendedor/vendedor';
import {DatosEmpresaPage} from '../pages/datos-empresa/datos-empresa';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    IngresoPage,
    UsuariosPage,
    VendedorPage,
    DatosEmpresaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    IngresoPage,
    UsuariosPage,
    VendedorPage,
    DatosEmpresaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
