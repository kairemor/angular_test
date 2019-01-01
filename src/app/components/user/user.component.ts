import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service' ;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  first_name:string ; // declaration unitialisation at the same time  
  last_name:string  ;
  age:number ; 
  adress: Adress ;
  hobbies:string[] ;  // This is a array of string . We can put number , or any to receive any kind of elememt 

  constructor(private DataService:DataService) {
    console.log("THis constructor start automaticcaly ") ;
   }

  ngOnInit() {
    console.log("This ngOninit function also start aumaticcaly ") ;
    this.last_name = "Kaire" ; 
    this.first_name = "Mor" ; 
    this.age = 20   ;
    this.adress = {
      street : '50 rue 43 ',
      city : 'khombole' ,
      state : 'Thies'
    } ; 
    this.hobbies = ['Code writer' , 'Watching tutorial' , 'Making tutorial in the futur'] ;
  }
  onClick(){
    console.log("Button is clicked")  ;
    this.first_name = "Modou" ; 
    this.hobbies.push("Can write program") ; 
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby) ; 
    return false ;
  }
  deleteHobby(hobby){
    for (let i = 0; i < this.hobbies.length; i++) {
        if(this.hobbies[i] == hobby){
          this.hobbies.splice(i,1); 
        }
      
    }
  }
  updateHobby(hobby){
    for (let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby){
        this.hobbies[i] = "Change" ; 
      }
    }
  }
  
}

interface Adress{
  street:string , 
  city:string ,
  state:string  
}