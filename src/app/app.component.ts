import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Cat {
  name: string;
  greed: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  title = 'betclic-actions';
  cats: Cat[] = [];

  ngOnInit() {
    this.getCats();
    console.log(this.cats);
  }

  public getCats() {
    return this.http
      .get<Cat[]>('https://betclic-test1.azurewebsites.net/api/cats')
      .subscribe((data) => (this.cats = data));
  }
}
