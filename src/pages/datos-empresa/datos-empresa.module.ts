import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosEmpresaPage } from './datos-empresa';

@NgModule({
  declarations: [
    DatosEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosEmpresaPage),
  ],
})
export class DatosEmpresaPageModule {}
