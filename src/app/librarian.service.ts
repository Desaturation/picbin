import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {
  libItems = [];

  constructor() { }

  addPhoto(toAdd){
    // console.log(toAdd);
    this.libItems = this.libItems.concat(toAdd);
    localStorage.setItem('library', JSON.stringify(this.libItems));
    // console.log(this.libItems);
  }

  remPhoto(id: string){
      this.libItems = this.libItems.filter(pic => pic.id != id);
  }

  downPhoto(){

  }

  downAll(){

  }

  clearLib(){
    this.libItems = [];
  }

  getLib(){
    return this.libItems;
  }

  ngOnInit(){
    this.libItems = JSON.parse(localStorage.getItem('library'));
    // console.log(this.libItems);
  }
}
