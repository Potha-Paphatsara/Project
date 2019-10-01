import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore'
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireStorage,AngularFireUploadTask} from 'angularfire2/storage'
import { Observable } from 'rxjs';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  downloadURL: Observable<string>;
  message:string = ""
  Picture:string = ""
  price:string = ""
  Status:string=""
  public myPerson = {};
  dataall =[];
  ionViewDidLoad(){}
  Number: string=""
  data: string=""
  item:Observable<any[]>;
  task: AngularFireUploadTask;
  percentage:Observable<number>;
  snapshot:Observable<any>;
  isUploaded:boolean=false;
  imageData = [];
  imageSrc: string = ''
  base64Image:string="";
  downloadurlall=[];
  date: string=""
  Shop_Name:string = ""
  Shop_Address:string = ""
  Shop_Telephone_Number:string = ""
  number_food:string=""
  name_food:string=""
  constructor(
    public database: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
    public router: Router,
    private camera: Camera,
    private storage:AngularFireStorage,
    private file:File,
    public dms: DomSanitizer
  ) { 
    this.setshopdetail;
  }

  ngOnInit() {
  }

  async presentAlert(title: string, content: string,) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })
    await alert.present()
   }


  delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
   }


  async getdatatoarray(item){
    var Pictures = {
      contentType: 'image/jpg',
      }
    await this.delay();

    const storageRef =  this.storage.ref("/post/"+this.Shop_Name+"/"+this.date+"/"+item.number)
    const task = storageRef.putString(item.string,'data_url',Pictures)
    .then(snapshot => {
      this.storage.ref("/post/"+this.Shop_Name+"/"+this.date+"/"+item.number).getDownloadURL().subscribe(
        async data => {
        console.log(item.string)
          await this.downloadurlall.push(data);
         }
        );
      }, err => {
    alert(err);
    })  
   }


  async post() {
    const { message, Status, price, } = this
    let now=new Date();
    let date = now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear()+"_"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds()
    this.date = date
    let numbers=0
      for(const item of this.imageData){
        await this.getdatatoarray(item);
        }
        try {
          setTimeout( () => {
            console.log(this.downloadurlall)
            this.presentAlert('Success', 'You post successfully')
            this.database.list("/post/"+this.user.getUID()+"/"+date).set("Status",Status)
            this.database.list("/post/"+this.user.getUID()+"/"+date).set("price",price)
            this.database.list("/post/"+this.user.getUID()+"/"+date).set("message",message)
            this.database.list("/post/"+this.user.getUID()+"/"+date).set("name_food",this.name_food)
            this.database.list("/post/"+this.user.getUID()+"/"+date).set("number_food",this.number_food)
            this.database.list("/post/"+this.user.getUID()+"/"+date).set("Picture",JSON.stringify(this.downloadurlall).toString())
            this.router.navigate(['/shop'])
            alert(JSON.stringify(this.downloadurlall).toString())
            }, 10000   )
          console.log('รอแป๊ป')
          } catch(error) {
              console.log(error.code)
            }
    }


  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
      img.onload = function () {
        var aux:any = this;
        c.width = aux.width;
        c.height = aux.height;
        ctx.drawImage(img, 0, 0);
        var dataURL = c.toDataURL("image/jpeg");
        callback(dataURL);
        };
        img.src = imageUri;
   };

  
  Take_A_Photo(){
    const options: CameraOptions = {
      quality : 50,
      targetHeight : 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
      }

    this.camera.getPicture(options).then((imageData) => {
      var key ="string";
      var obj = {};
      var number = Math.random() * 10000000000000000;
      var numberss=number.toString()
      var keys ="number";
      var objs = {};
      this.imageData.push({"string":"data:image/jpeg;base64,"+ imageData,"number":numberss});
      })
  

  
    }
  
  display(b64: string) {
    return this.dms.bypassSecurityTrustUrl(b64);
    }
  
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
      }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    }
  


  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)

    const options: CameraOptions = {
      quality : 50,
      targetHeight : 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
      }
      var Picture = {
        contentType: 'image/jpg',
        }
      var key ="string";
      var obj = {};
      var number = Math.random() * 10000000000000000;
      var numberss=number.toString()
      var keys ="number";
      var objs = {};
      this.imageData.push({"string":this.imageSrc,"number":numberss});

    }

    async setshopdetail(){
      var have_shop = await this.user.have_shops()
      //console.log(have_shop)
      this.Shop_Name = have_shop[0].Shop_Name
      this.Shop_Address = have_shop[0].Shop_Address
      this.Shop_Telephone_Number = have_shop[0].Shop_Telephone_Number
 
    
    }
    

  onClickDelete(item){
    console.log("key : "+JSON.stringify(item));
    let itemRef = this.database.list('students');

    itemRef.remove(item.key);
    }



  removeImage(item, index){
    if (index > -1) {
      this.imageData.splice(item, 1);
      }
                 
   }


}
