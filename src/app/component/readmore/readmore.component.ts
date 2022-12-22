import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadmoreComponent implements OnInit {

  constructor( private route: Router,  private serv:MyserviceService, private rout:ActivatedRoute) { }
  index:any;
  readmore:any=[];
  ngOnInit(): void {
    this.index=this.rout.snapshot.paramMap.get('index')
    this.readmore = this.serv.blogsite[0].adminnn[0].readmore;
  }
close(){

}
dele(i:any){
  // this.home.splice(i,1)
  localStorage.setItem('cardTable', JSON.stringify(this.serv.blogsite));
}
edit(i:any){

}
}
