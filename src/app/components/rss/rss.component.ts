import { Component, OnInit } from '@angular/core';
import { RssService } from 'src/app/services/rss.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class RssComponent implements OnInit {


  rss: any[] = [];

  constructor(private rssService: RssService) {}

  ngOnInit() {

    // this.rssService.getRss()
    // .subscribe(
    //   (data) => {
    //   // tslint:disable-next-line: no-string-literal
    //   this.rss = data.items;
    //   console.log(data);
    //   console.log(this.rss);
    //   },
    //   (error) => {
    //     console.error(error);
    // });
  }

  onNoticias() {
    this.rssService.getRssNoticias()
    .subscribe(
      (data) => {
      // tslint:disable-next-line: no-string-literal
      this.rss = data.items;
      console.log(data);
      console.log(this.rss);
      },
      (error) => {
        console.error(error);
    });
  }

  onDeportes() {
    this.rssService.getRssDeportes()
    .subscribe(
      (data) => {
      // tslint:disable-next-line: no-string-literal
      this.rss = data.items;
      console.log(data);
      console.log(this.rss);
      },
      (error) => {
        console.error(error);
    });
  }

  onCine() {
    this.rssService.getRssCine()
    .subscribe(
      (data) => {
      // tslint:disable-next-line: no-string-literal
      this.rss = data.items;
      console.log(data);
      console.log(this.rss);
      },
      (error) => {
        console.error(error);
    });
  }

  onSalud() {
    this.rssService.getRssSalud()
    .subscribe(
      (data) => {
      // tslint:disable-next-line: no-string-literal
      this.rss = data.items;
      console.log(data);
      console.log(this.rss);
      },
      (error) => {
        console.error(error);
    });
  }

  onAutomovilismo() {
    this.rssService.getRssAutomovilismo()
    .subscribe(
      (data) => {
      // tslint:disable-next-line: no-string-literal
      this.rss = data.items;
      console.log(data);
      console.log(this.rss);
      },
      (error) => {
        console.error(error);
    });
  }

  onTecnologia() {
    this.rssService.getRssTecnologia()
    .subscribe(
      (data) => {
      // tslint:disable-next-line: no-string-literal
      this.rss = data.items;
      console.log(data);
      console.log(this.rss);
      },
      (error) => {
        console.error(error);
    });
  }

}
