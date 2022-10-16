import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/User';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() 
  OnAddUser: EventEmitter<User> = new EventEmitter();

  name !: string;
  class !: string;
  admin : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name || !this.class){
      alert('Please add Name or Class!');
    }

    const newUser = {
      name: this.name,
      class: this.class,
      admin: this.admin,
    }



    this.OnAddUser.emit(newUser);
    //@todo - emit event

    this.name= '';
    this.class = '';
    this.admin = false;


  }
}
