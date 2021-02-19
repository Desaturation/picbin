import { Component } from '@angular/core';
import { ImgSearchService } from "../imgsearch.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  results:any;
  images = [];
  constructor(private imgSearcher: ImgSearchService) {}

  ngOnInit(){
    this.imgSearcher.searchImg('').subscribe( res => {
      this.images = res['results'];
      console.log(res);
      console.log(this.images);
      // this.isLoading = false;
    },
    (err) => console.log('Ooops!', err),
    () => console.log(Response, this.results)
    )
  }

}
