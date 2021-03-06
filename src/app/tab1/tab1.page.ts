import { Component, OnInit } from '@angular/core';
import { ImgSearchService } from "../imgsearch.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public img: string = "";
  public result: any;
  public isLoading: boolean = true;

  constructor(private imgService: ImgSearchService, public router: Router) {
    this.getRandomImg();
   }

  ngOnInit(): void {
  }


  getRandomImg() {
    this.imgService.getRandomImg().subscribe(
      (data) => {
        this.result = data;
        this.img = this.result.urls.small;
        // console.log(this.img);
        this.isLoading = false;
      },
      (err) =>  console.log('Oops!', err),
      () => console.log('Response', this.result)
    )
  }

  search(query){
    // console.log(query);
    localStorage.setItem('query', query);
    this.router.navigateByUrl("/tabs/tab2");

  }
}
