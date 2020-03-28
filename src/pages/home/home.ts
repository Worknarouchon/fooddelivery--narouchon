import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnefoodPage} from '../onefood/onefood';
import { TwofoodPage} from '../twofood/twofood';
import { ThreefoodPage } from '../threefood/threefood';
import { FourfoodPage} from '../fourfood/fourfood';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToOnefoodPage(){
    this.navCtrl.push(OnefoodPage);
  }
  goToTwofoodPage(){
    this.navCtrl.push(TwofoodPage);
  }
  goToThreefoodPage(){
    this.navCtrl.push(ThreefoodPage);
  }
  goToFourfoodPage(){
    this.navCtrl.push(FourfoodPage);
  }
}
