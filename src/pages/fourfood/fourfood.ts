import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodProvider } from '../../providers/food/food';
import { FourPage } from '../../pages/four/four';
/**
 * Generated class for the FourfoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fourfood',
  templateUrl: 'fourfood.html',
})
export class FourfoodPage {
  desertlist:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:FoodProvider) {
    this.data.loadAlldesert().then(result=>{
      this.desertlist=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(FourPage,{code:id});
  }
  goToFourPage(food_id:any){
   
    this.navCtrl.push(FourPage,{ id:food_id });
  }

}
