import { Component } from '@angular/core';
import { ImgSearchService } from "../imgsearch.service";
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from "../image-modal/image-modal.page";
import { LibrarianService } from "../librarian.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  libList : string[] = [];
  libObjs = [];

  constructor(private imgSearcher : ImgSearchService, public modalController: ModalController, private lib: LibrarianService) {
    


  }

  clearList(){
    this.lib.clearLib();
    this.ionViewWillEnter();
  }

  ionViewWillEnter(){
    // this.imgSearcher.searchImg('pizza', 0).subscribe( res => {
    //     this.libObjs = res['results'];

    //   console.log(res);
    // },
    // (err) => console.log('Ooops!', err),
    // () => console.log(Response, this.libObjs)
    // )
    this.libObjs = this.lib.getLib()
    console.log(this.libObjs.toString);

  }

}
