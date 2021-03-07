import { Component } from '@angular/core';
import { ImgSearchService } from "../imgsearch.service";
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from "../image-modal/image-modal.page";
import { LibrarianService } from "../librarian.service";
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';


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

  urlToPromise(url) {

    }

  downloadZip(){
var zip = new JSZip();
    var clientKey = '3LFTdHt8Pg9GVT9CJIbv1298fAwavvACnCBRFiJYsKI';

    this.libObjs.forEach((f, i) => {
      let url = f.links.download;
      var imageBlob = fetch(`${f.urls.small}?client_id=${clientKey}`).then(response => response.blob());
      // console.log(imageBlob);
      zip.file(`image${i}.jpg`, imageBlob, { base64: true });

    });

    zip.generateAsync({type:"blob"})
    .then(function (blob) {
    saveAs(blob, "Images.zip");
});
    
    // var FileSaver = require('file-saver');
    // this.libObjs.forEach((f, i) => {
    // FileSaver.saveAs(`${f.urls.small}?client_id=${clientKey}`, `image${i}.jpg`);
    
    // });


  }

  remove(id: string){
    this.lib.remPhoto(id);
    this.ionViewWillEnter();
  }

  clearList(){
    this.lib.clearLib();
    this.ionViewWillEnter();
  }

  ionViewWillEnter(){
    this.libObjs = this.lib.getLib()
    // console.log(this.libObjs.toString);
  }

}
