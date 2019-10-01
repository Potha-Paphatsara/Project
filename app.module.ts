import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { CartDeliveryAddressFormPageModule } from './pages/cart-delivery-address-form/cart-delivery-address-form.module';


import firebaseConfig from '../app/services/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { HttpModule } from '@angular/http'
import { UserService } from './services/user.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './services/auth.service';
import { ShareModule } from './services/share.module';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage,AngularFireUploadTask } from 'angularfire2/storage'
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { tap } from 'rxjs/operators';

library.add(fab,fas,far);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'ios'
    }), 
     AppRoutingModule,
     HttpClientModule,
     FontAwesomeModule,
     CartDeliveryAddressFormPageModule,
     BrowserModule, 
     IonicModule.forRoot(), 
     AppRoutingModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireAuthModule,
     AngularFireDatabaseModule,
     AngularFirestoreModule,
     HttpModule,
     ShareModule,
     FormsModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	NavController,
	ToastController,
	File,
	ImagePicker,
	Camera,
	AngularFireStorage,
	UserService,
	AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
