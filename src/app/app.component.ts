import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;
  digits: Array<number> = new Array();
  results: number;

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.digits[i] = i;
      this.title = 'Calculator';
    }
  }

}
