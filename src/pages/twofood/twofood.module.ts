import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwofoodPage } from './twofood';

@NgModule({
  declarations: [
    TwofoodPage,
  ],
  imports: [
    IonicPageModule.forChild(TwofoodPage),
  ],
})
export class TwofoodPageModule {}
