import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OnefoodPage} from '../pages/onefood/onefood';
import { TwofoodPage} from '../pages/twofood/twofood';
import { ThreefoodPage} from '../pages/threefood/threefood';
import { FourfoodPage} from '../pages/fourfood/fourfood';
import { FoodProvider } from '../providers/food/food';
import { HttpClientModule } from '@angular/common/http';
import { OnePage } from '../pages/one/one';
import { TwoPage} from '../pages/two/two';
import { ThreePage} from '../pages/three/three';
import { FourPage} from '../pages/four/four';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnefoodPage,
    TwofoodPage,
    ThreefoodPage,
    FourfoodPage,
    OnePage,
    TwoPage,
    ThreePage,
    FourPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OnefoodPage,
    TwofoodPage,
    ThreefoodPage,
    FourfoodPage,
    OnePage,
    TwoPage,
    ThreePage,
    FourPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodProvider
  ]
})
export class AppModule {}
