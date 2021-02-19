import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  modalSelect;
  modalTitle: string;
  modelId: number;
  imageObj: any;

  constructor(private modalController: ModalController, private navParams: NavParams) { 
   }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.imageObj.id;
    this.modalTitle = this.imageObj.user.name;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
