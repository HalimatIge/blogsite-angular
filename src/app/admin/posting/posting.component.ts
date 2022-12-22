import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent implements OnInit {

  constructor(public service:MyserviceService) { }

  ngOnInit(): void {
  }
 category=''
  title=''
  content=''
  trend=''
  date=''
  list:any=[];
shorter:any;
//  shoter=element.content11.slice(0,150);
  post(){
    this.shorter=this.content.slice(0,150);
if (this.image=='' && this.category=='' && this.title=='' && this.content=='' && this.trend=='' && this.date=='') {
  return;
} else {
  this.list.push(
    { done:false, img:this.image, category1:this.category, title1:this.title, content1:this.content, trend1:this.trend, date1:this.date, }
    )
    if (this.category=='Home') {

   this.service.blogsite[0].adminnn[0].home.push(
  { done:false, img:this.image, category1:this.category, title1:this.title, content1:this.shorter, trend1:this.trend, date1:this.date, }
)
alert('home')
    }
    else if (this.category=='Beauty'){
      this.service.blogsite[0].adminnn[0].beauty.push(
        { done:false, img:this.image, category1:this.category, title1:this.title, content1:this.content, trend1:this.trend, date1:this.date, }
      )
      alert('beauty')
    }
    else if (this.category=='Fashion'){
      this.service.blogsite[0].adminnn[0].fashion.push(
        { done:false, img:this.image, category1:this.category, title1:this.title, content1:this.content, trend1:this.trend, date1:this.date, }
      )
      alert('fashion')
    }
    else if (this.category=='Lifestyle'){
      this.service.blogsite[0].adminnn[0].lifestyle.push(
        { done:false, img:this.image, category1:this.category, title1:this.title, content1:this.content, trend1:this.trend, date1:this.date, }
      )
      alert('Lifestyle')
    }
    else if (this.category=='Travel'){
      this.service.blogsite[0].adminnn[0].travel.push(
        { done:false, img:this.image, category1:this.category, title1:this.title, content1:this.content, trend1:this.trend, date1:this.date, }
      )
      alert('travel')
    }
    else{

      alert('select a category')
    }
    console.log(this.service.blogsite);
    localStorage.setItem('cardTablee', JSON.stringify(this.service.blogsite));

}
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
