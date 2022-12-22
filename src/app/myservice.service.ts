import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  blogsite:any=[
{
  adminnn:[
    {
      home:[],
      beauty:[],
      fashion:[],
      lifestyle:[],
      readmore:[],
      myProfile:[],
      myusers:[],
      details:[
        {name: "Ige Halimat", phone: "08156550086", mail: "halimatyetundeige@gmail.com", password: "12345678" ,who:'Admin'}

      ]
    }
  ]
},

{
  users:[
    {
      profile:[],
      }
    ]
  },
  ]
  guard: any=true;
  who: any;
  constructor() { }
}
