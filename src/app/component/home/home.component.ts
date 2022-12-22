import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public service:MyserviceService,  private route:ActivatedRoute) { }
index:any;
yes:any;
list:any=[];
home:any=[];
  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get('index');

    setTimeout(() => {
      this.list=this.service.blogsite[0].adminnn[0].home;

      for (let index = 0; index < this.list.length; index++) {
        this.home.push(this.list[index]);
        }
    }, );

  }

  dele(i:any){
    this.home.splice(i,1)
    localStorage.setItem('cardTablee', JSON.stringify(this.service.blogsite));
  }
  edit(i:any){

  }

  filedata:any;
  image:any;

  fileEvent(e:any){
 this.filedata=e.target.files[0];
 let reader=new FileReader();
 reader.readAsDataURL(this.filedata);
 setTimeout(() => {
this.image=reader.result;
 }, 2000);

  }

}
