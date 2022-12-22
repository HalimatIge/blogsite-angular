import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private route: Router,  private serv:MyserviceService, private rout:ActivatedRoute) { }

  formData=this.fb.group({
    name:['',Validators.required],
    lname:['',Validators.required],
    number:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern('^[A-Za-z0-9]{8,16}$')]],
    cPass:['',Validators.required]
  })
  signup:any=[];
  ngOnInit(): void {
    this.signup= this.serv.blogsite[1].users[0].profile;
  }

  get name(){
    return this.formData.get('name')
   }
  get  lname(){
    return this.formData.get('lname')
   }
  get number(){
    return this.formData.get('number')
   }
  get email(){
    return this.formData.get('email')
   }

   get password(){
    return this.formData.get('password')
   }
   get cPass(){
    return this.formData.get('cPass')
   }

   submitted=false;
   success=false;
   passwordmatch=false;
   emailmatch=false;
   seen= false;

   type='';
   change(){
    this.type=='password'?this.type='text':this.type='password';

   }
   submit(){
    this.submitted=true;
       let {name,lname, number,email,password, cPass } = this.formData.value;

    if (password == cPass) {

      if (this.signup!=0) {
  for (let index = 0; index < this.signup.length; index++) {
  if (email==this.signup[index].mail) {
  this.seen=true;
  this.emailmatch=true;
  setTimeout(() => {
    this.submitted=false;
  this.seen=false;
  }, 500);

  }else if(index==this.signup.length-1 && this.seen==false){
    this.signup.push({name:name, lastname:lname, phone:number,mail:email, password:password, done:false, who:'User'})
    this.serv.guard=true;
    this.success=true;

    localStorage.setItem('cardTablee' , JSON.stringify(this.serv.blogsite))

    this.serv.who== 'User'
    setTimeout(() => {
    this.submitted=false;
    this.success=false;
    this.route.navigate(['/login'])
    }, 1000);

    return;
  }

  }
      } else{
        this.signup.push({name:name, lastname:lname, phone:number,mail:email, password:password, done:false, who:'User'})
     this.serv.guard=true;
     this.success=true;


     localStorage.setItem('cardTablee' , JSON.stringify(this.serv.blogsite))

    setTimeout(() => {
      this.submitted=false;
      this.success=false;
      this.serv.who== 'User'
      console.log();

      this.route.navigate(['/login'])
      }, 1000);


  }

      }
     else{
      this.passwordmatch=true;
      setTimeout(() => {
        this.submitted=false
        }, 1000);


    }
  }

}
