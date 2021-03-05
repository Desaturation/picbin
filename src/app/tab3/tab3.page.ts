import { Component } from '@angular/core';
import { ImgSearchService } from "../imgsearch.service";
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from "../image-modal/image-modal.page";
import { LibrarianService } from "../librarian.service";
import { JSZipUtils } from "jszip-utils";
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';
import * as JSZip from 'jszip';
import { utils } from 'protractor';

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
// var zip = new JSZip();
//     var clientKey = '3LFTdHt8Pg9GVT9CJIbv1298fAwavvACnCBRFiJYsKI';

//     this.libObjs.forEach((f, i) => {
//       let url = f.links.download;
//       // var imageBlob = fetch(`${f.links.download}?client_id=${clientKey}`).then(response => response.blob());
//       console.log(f.links.download);
//       zip.file(`image${i}.jpg`, this.urlToPromise(url), { base64: true });
//     });

//     zip.generateAsync({type:"blob"})
//     .then(function (blob) {
//     saveAs(blob, "hello.zip");
// });


{
  var pdf = new jsPDF('p', 'pt', 'letter');
  let canvas =document.getElementById('barcode');
  console.log(canvas);
  let dataURL = canvas.toDataURL("image/jpeg");
  pdf.addImage(dataURL, 'JPEG', 15, 40, 180, 160);
  function (dispose) {
     pdf.output('datauri');
  }, margins);
}
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
    console.log(this.libObjs.toString);
  }

}
