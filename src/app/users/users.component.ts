import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }

}
