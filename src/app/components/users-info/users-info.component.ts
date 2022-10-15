import { Component, OnInit, Input } from '@angular/core';
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


  faTimes = faTimes; // 2. From angular-fontawesome
 

  constructor() { }

  ngOnInit(): void {
  }

}
