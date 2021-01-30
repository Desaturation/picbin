import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, JsonpClientBackend } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImgSearchService {
  private giphyAPIBase = 'https://api.unsplash.com/photos/'
  private APIKEY = '3LFTdHt8Pg9GVT9CJIbv1298fAwavvACnCBRFiJYsKI';
  page = 1;
  per_page = 21;
  constructor(private http: HttpClient) { }

  getRandomImg(): Observable<Response> {
    return this.http.get<Response>(`https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.APIKEY}`);
  }

  searchImg(offset, limit, text): Observable<Response>{
    return this.http.get<Response>(this.giphyAPIBase + '?client_id=' + this.APIKEY + '&offset=' + offset + '&limit=' + limit + '&query=' + text);
  }
}
