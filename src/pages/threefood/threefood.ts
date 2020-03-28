import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodProvider } from '../../providers/food/food';
import { ThreePage } from '../../pages/three/three';
/**
 * Generated class for the ThreefoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-threefood',
  templateUrl: 'threefood.html',
})
export class ThreefoodPage {
  drinklist:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:FoodProvider) {
    this.data.loadAllDrink().then(result=>{
      this.drinklist=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(ThreePage,{code:id});
  }
  goToThreePage(food_id:any){
   
    this.navCtrl.push(ThreePage,{ id:food_id });
  }

}
 