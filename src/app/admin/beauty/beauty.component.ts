import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent implements OnInit {

  constructor(public service:MyserviceService,  private route:ActivatedRoute) { }
beauty:any=[];
list:any=[];
index:any;
  ngOnInit(): void {
    setTimeout(() => {
      this.index=this.route.snapshot.paramMap.get('index');
      this.list=this.service.blogsite[0].adminnn[0].beauty;

      for (let index = 0; index < this.list.length; index++) {
        this.beauty.push(this.list[index]);
      }
    }, 100);

  }
  i:any;
  dele(i:any){
    this.beauty.splice(i,1)
    localStorage.setItem('cardTable', JSON.stringify(this.service.blogsite));
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
 console.log(e);
  }

}
