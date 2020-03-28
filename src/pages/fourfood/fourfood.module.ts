import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FourfoodPage } from './fourfood';

@NgModule({
  declarations: [
    FourfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(FourfoodPage),
  ],
})
export class FourfoodPageModule {}
