import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from "@ionic/angular";
import { LibrarianService } from "../librarian.service";

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

  constructor(private modalController: ModalController, private navParams: NavParams, private router: Router, private lib: LibrarianService) { 
   }

  ngOnInit() {
    // console.table(this.navParams);
    this.modelId = this.imageObj.id;
    this.modalTitle = this.imageObj.user.name;
    
    this.imageObj.tags.forEach(element => {
      // console.log(element);
      // console.log(element.title);
      this.tags.push(element.title);
      // console.log(this.tags);
    });
    
  }
  search(query){
    // console.log(query);
    localStorage.setItem('query', query);
    this.router.navigateByUrl("/tabs/tab2");

  }

  addImg(){
    // console.log(this.imageObj);
    this.lib.addPhoto(this.imageObj);
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
