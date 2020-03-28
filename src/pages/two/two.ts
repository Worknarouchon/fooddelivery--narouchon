import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodProvider } from '../../providers/food/food';
/**
 * Generated class for the TwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-two',
  templateUrl: 'two.html',
})
export class TwoPage {
  food:any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: FoodProvider) {
    console.log(navParams);
    var id = this.navParams.get('id');
    this.data.loadfastfoodlistId(id).then(res=>{
      this.food=res;
    });
  }
}
