import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public service:MyserviceService ,  private route:ActivatedRoute, private rout:Router) { }
  status= ''
  guard:any=''
  index:any=''
  name:any =''
  lname:any=''
  ngOnInit(): void {
    this.status = this.service.blogsite[0].adminnn[0].details[0].status
    this.guard = this.service.guard
    this.index= Number(this.route.snapshot.paramMap.get('index'))
      this.name= this.service.blogsite[1].users[0].profile[this.index].name;
      this.lname=this.service.blogsite[1]

  }
  press=false;

show(){
  this.press?this.press=false:this.press=true;
}
chil(){
  if (this.status =='admin') {
    alert('admin link')
  } else{
    alert('userlink ')
  }
}
check(){

}
logout(){
  this.service.guard = false;
  this.rout.navigate([''])
}

}
