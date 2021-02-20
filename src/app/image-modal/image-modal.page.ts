import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  tags =[];

  constructor(private modalController: ModalController, private navParams: NavParams, private router: Router) { 
   }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.imageObj.id;
    this.modalTitle = this.imageObj.user.name;
    console.log(this.imageObj.tags[1].title);
    
    this.imageObj.tags.forEach(element => {
      // console.log(element);
      //console.log(element.title);
      this.tags.push(element.title);
     // console.log(this.tags);
    });
    
  }
  search(query){
    console.log(query);
    localStorage.setItem('query', query);
    this.router.navigateByUrl("/tabs/tab2");

  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
