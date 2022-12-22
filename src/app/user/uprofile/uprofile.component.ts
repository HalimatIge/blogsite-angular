import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-uprofile',
  templateUrl: './uprofile.component.html',
  styleUrls: ['./uprofile.component.scss']
})
export class UprofileComponent implements OnInit {

  constructor(public service:MyserviceService ,private route:ActivatedRoute) { }
  name:any =''
   index:any=''
  ngOnInit(): void {
    this.index= Number(this.route.snapshot.paramMap.get('index'))
    this.name= this.service.blogsite[1].users[0].profile[this.index].name;

  }

}

