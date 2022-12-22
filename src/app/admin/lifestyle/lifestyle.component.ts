import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss']
})
export class LifestyleComponent implements OnInit {

  constructor(public service:MyserviceService,  private route:ActivatedRoute) { }
  lifestyle:any=[];
  list:any=[];
  index:any;
    ngOnInit(): void {
      setTimeout(() => {
        this.index=this.route.snapshot.paramMap.get('index');
        this.list=this.service.blogsite[0].adminnn[0].lifestyle;

        for (let index = 0; index < this.list.length; index++) {
          this.lifestyle.push(this.list[index]);
        }
      }, 100);

    }


    i:any;
    dele(i:any){
      this.lifestyle.splice(i,1)
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
