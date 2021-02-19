import { Component } from '@angular/core';
import { ImgSearchService } from "../imgsearch.service";
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from "../image-modal/image-modal.page";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  results:any;
  images = [];
  query = 'banana';
  dataReturned: any;

  constructor(private imgSearcher: ImgSearchService, public modalController: ModalController) {}

  async openModal(image) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        // "paramID": "image.id",
        // "paramTitle": "Test Title",
        "imageObj": image
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  ngOnInit(){
    this.imgSearcher.searchImg(this.query).subscribe( res => {
      if(this.query == ''){
        this.images = this.images.concat(res);
      }
      else{
        this.images = res['results'];
      }
      console.log(res);
      console.log(this.images);
      // this.isLoading = false;
    },
    (err) => console.log('Ooops!', err),
    () => console.log(Response, this.results)
    )
  }

}
