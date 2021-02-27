import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, JsonpClientBackend } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImgSearchService {
  private giphyAPIBase = 'https://api.unsplash.com/photos/'
  private APIKEY = '3LFTdHt8Pg9GVT9CJIbv1298fAwavvACnCBRFiJYsKI';
  public page = 1;
  public per_page = 24;
  constructor(private http: HttpClient) { }

  getRandomImg(): Observable<Response> {
    return this.http.get<Response>(`https://api.unsplash.com/photos/random?client_id=${this.APIKEY}`);
  }

  getImg(): Observable<Response>{
    return this.http.get<Response>(`https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.APIKEY}`);
  }

  searchImg(query, offset: number): Observable<Response>{
    if(query == ''){
      return this.http.get<Response>(`https://api.unsplash.com/photos/?page=${offset}&per_page=${this.per_page}&client_id=${this.APIKEY}`);
    }
    else{
    return this.http.get<Response>(`https://api.unsplash.com/search/photos?client_id=${this.APIKEY}&query=${query}&page=${offset}&per_page=${this.per_page}`);
    }
  }
}
