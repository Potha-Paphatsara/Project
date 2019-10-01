import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private alertController:AlertController,
    public toastController:ToastController
    ) { }

    async showAlert(msg) {
      const alert = await this.alertController.create({
        header: 'Information',
        //subHeader: 'msg',
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }

    async  toastMsg(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
   }
}
