import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css', './../../../../app.component.css']
})
export class NotFoundPageComponent {

  MENU_URL: string =  "";

  close(){
    window.location.href = this.MENU_URL;
    return;
  }

}
