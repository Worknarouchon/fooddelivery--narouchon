import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwoPage } from '../../pages/two/two';
import { FoodProvider } from '../../providers/food/food';
/**
 * Generated class for the TwofoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-twofood',
  templateUrl: 'twofood.html',
})
export class TwofoodPage {
  fastfoodlist:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:FoodProvider) {
    this.data.loadAllfastfoodlist().then(result=>{
      this.fastfoodlist=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(TwoPage,{code:id});
  }
  goToTwoPage(food_id:any){
   
    this.navCtrl.push(TwoPage,{ id:food_id });
  }

}
