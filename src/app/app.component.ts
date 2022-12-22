import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogsite';

  constructor(public serv:MyserviceService) { }

  ngOnInit(): void {
   if (localStorage.getItem('cardTablee')) {
    let a:any=localStorage.getItem('cardTablee');
    this.serv.blogsite=JSON.parse(a);
   }
   else{
    this.serv.blogsite=this.serv.blogsite
   }
  }

}
