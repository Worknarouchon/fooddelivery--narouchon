import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodProvider } from '../../providers/food/food';

/**
 * Generated class for the OnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class OnePage {
  food:any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: FoodProvider) {
    console.log(navParams);
    var id = this.navParams.get('id');
    this.data.loadById(id).then(res=>{
      this.food=res;
    });
  }
}