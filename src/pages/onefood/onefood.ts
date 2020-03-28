import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

  import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FoodProvider } from '../../providers/food/food';
import { OnePage } from '../../pages/one/one';
/**
 * Generated class for the OnefoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onefood',
  templateUrl: 'onefood.html',
})
export class OnefoodPage {
foodlist:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:FoodProvider) {
    this.data.loadAll().then(result=>{
      this.foodlist=result;
      console.log(result);
    });
  }

  showDetal(id){
    this.navCtrl.push(OnePage,{code:id});
  }
  goToOnePage(food_id:any){
   
    this.navCtrl.push(OnePage,{ id:food_id });
  }

}
