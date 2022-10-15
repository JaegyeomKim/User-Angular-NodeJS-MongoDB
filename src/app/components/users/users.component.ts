import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = [];

  constructor(private userService: UserService) { }     // start UserService

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users)=>this.users = users); // start UserService Method which call List from service (Here <- sample <- List)
  }

}
