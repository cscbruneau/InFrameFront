import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InFrameFront';
  
  sheets = document.styleSheets;

  getLog();



  getLog(){
    console.log(this.sheets);
  }


}

