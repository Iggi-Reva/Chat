import { Component, OnInit } from '@angular/core';
import { ChattingService } from '../chatting.service';

@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css']
})
export class Person1Component implements OnInit {

  name:string;
  person1Dp:any;
  person1lastSeen:any;
  person2lastSeen:any;
  chatMsg:any;
  
  constructor(private person1:ChattingService) { 
    this.name="Person2";
    this.chatMsg=person1.chatMsgs;
  }

  ngOnInit(): void {
    this.person2lastSeen=this.person1.person2LS;
    this.person1Dp=this.person1.person1Dp;
    //this.person1lastSeen=this.person1.person1LS;

    this.person1lastSeen=new Date;
    this.person1.person1Ltseen(this.person1lastSeen);
  }
  
  //date = new Date();

  //msgs=[];
  send(msg:any){
    let chatmsgObj={
      name:"Person2",
      mesg:msg,
      time:new Date()
    }
      this.chatMsg.push(chatmsgObj);
      console.log(this.chatMsg);
     //this.msgs=this.person1.chat(msg);
     
  }


  
  

}
