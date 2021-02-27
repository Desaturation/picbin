import { Component } from '@angular/core';
import { ImgSearchService } from "../imgsearch.service";
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from "../image-modal/image-modal.page";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  libList : string[] = [];
  libObjs = [];

  constructor(private imgSearcher : ImgSearchService, public modalController: ModalController) {
    


  }

  ngOnInit(){
    this.imgSearcher.searchImg('pizza', 0).subscribe( res => {
      // if(this.query == ''){
      //   this.images = this.images.concat(res);
      // }
      // else{
        this.libObjs = res['results'];

      console.log(res);
      // this.isLoading = false;
    },
    (err) => console.log('Ooops!', err),
    () => console.log(Response, this.libObjs)
    )
  }

}
