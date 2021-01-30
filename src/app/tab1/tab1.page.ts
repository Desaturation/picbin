import { Component, OnInit } from '@angular/core';
import { ImgSearchService } from "../imgsearch.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public img: string = "";
  public result: any;
  public isLoading: boolean = true;

  constructor(private imgService: ImgSearchService) {
    this.getRandomImg();
   }

  ngOnInit(): void {
  }

  getRandomImg() {
    this.imgService.getRandomImg().subscribe(
      (data) => {
        this.result = data;
        this.img = this.result.data.image_url;
        console.log(this.img);
        this.isLoading = false;
      },
      (err) =>  console.log('Oops!', err),
      () => console.log('Response', this.result)
    )
  }
}
