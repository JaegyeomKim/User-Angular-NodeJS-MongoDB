import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../User';
import { faTimes } from '@fortawesome/free-solid-svg-icons';      // 1. From angular-fontawesome    

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

  @Input() 
  user !: User;
  @Output() 
  OnDeleteUser : EventEmitter<User> = new EventEmitter();
  @Output()
  onToggleAdmit : EventEmitter<User> = new EventEmitter();
  faTimes = faTimes; // 2. From angular-fontawesome
 

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(user : User){
    this.OnDeleteUser.emit(user);
  }

  onToggle(user : User){
    this.onToggleAdmit.emit(user);
  }

}
