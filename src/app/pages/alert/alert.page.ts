import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string = 'Titulo';

  constructor( public alertCtrl: AlertController ) { }

  ngOnInit() {
  }
  async prompInput() {
    const alert =  await this.alertCtrl.create({
      header: 'Promp Alert ;v',
      subHeader: 'Change the title page',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Page title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (text) => {
            console.log(text);
            this.titulo = text.title;
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
            text: 'Ok',
            handler: (blah) => {
              console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }

}
