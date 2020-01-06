import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(private http: HttpClient) { }

  getRssNoticias(): Observable<any> {
    return this.http.get(this.newRssNoticias());

  }

  getRssDeportes(): Observable<any> {
    return this.http.get(this.newRssDeportes());

  }

  getRssTecnologia(): Observable<any> {
    return this.http.get(this.newRssTecnologia());

  }


  private newRssNoticias(): string {
    return 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.elmostrador.cl%2Fdia%2Ffeed%2F';
  }

  private newRssDeportes(): string {
    // tslint:disable-next-line:max-line-length
    return 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fe00-marca.uecdn.es%2Frss%2Ffutbol%2Fprimera-division.xml';
  }

  private newRssTecnologia(): string {
    // tslint:disable-next-line:max-line-length
    return 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F';
  }
}
