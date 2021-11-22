import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChattingService {

  person1Dp="../../assets/pro4.jpg";
  person2Dp="../../assets/pro1.jpg";
  person1LS:any;
  person2LS:any;
  //msgs:any;
  chatMsgs:any;

  constructor() { 
    this.chatMsgs=[];
  }

  chat(msg:any){
    this.chatMsgs=msg;

    // this.chatMsg.push(msg)
    // return this.chatMsg;
  }
  person1Ltseen(time1:any){
    this.person1LS=time1;
  }
  person2Ltseen(time2:any){
    this.person2LS=time2;
  }
  //date =new Date;
}
