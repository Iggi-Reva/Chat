import { Component, OnInit } from '@angular/core';
import { ChattingService } from '../chatting.service';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',
  styleUrls: ['./person2.component.css']
})
export class Person2Component implements OnInit {

  name:string;
  person2Dp:any;
  person1lastSeen:any;
  person2lastSeen:any;
  chatMsg:any;

  constructor(private person1:ChattingService) {
    this.name="Person1";
    this.chatMsg=person1.chatMsgs;
   }

  ngOnInit(): void {
    this.person2Dp=this.person1.person2Dp;
    this.person1lastSeen=this.person1.person1LS;

    this.person2lastSeen=new Date;
    this.person1.person1Ltseen(this.person2lastSeen);
  }

  date = new Date();

  msgs=[];
  send(msg:any){
    let chatmsgObj={
      name:"Person1",
      mesg:msg,
      time:new Date()
    }
      this.chatMsg.push(chatmsgObj);
      console.log(this.chatMsg);
     //this.msgs=this.data.chat(msg);
  }
}
