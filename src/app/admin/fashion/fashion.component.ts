import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {

  constructor(public service:MyserviceService,  private route:ActivatedRoute) { }
  fashion:any=[];
  list:any=[];

  index:any;
    ngOnInit(): void {
      setTimeout(() => {
        this.index=this.route.snapshot.paramMap.get('index');
        this.list=this.service.blogsite[0].adminnn[0].fashion;

        for (let index = 0; index < this.list.length; index++) {
          this.fashion.push(this.list[index]);
        }
      }, 100);

    }
    j:any;
    dele(j:any){
      this.fashion.splice(j,1)
      localStorage.setItem('cardTablee', JSON.stringify(this.service.blogsite));
    }

    edit(j:any){

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
