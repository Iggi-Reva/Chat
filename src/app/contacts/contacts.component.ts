import { Component, OnInit } from '@angular/core';
import { ChattingService } from '../chatting.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  person1Dp:any;
  person2Dp:any;
  dispPerson1:boolean=false;
  dispPerson2:boolean=false;

  constructor(private dpimg:ChattingService) { }

  ngOnInit(): void {
    this.person1Dp=this.dpimg.person1Dp;
    this.person2Dp=this.dpimg.person2Dp;
  }

  per1(){
    this.dispPerson1=true;
    this.dispPerson2=false;
  }

  per2(){
    this.dispPerson2=true;
    this.dispPerson1=false;
  }

}
