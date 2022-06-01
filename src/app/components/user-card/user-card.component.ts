import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  users:User[]
  usersList = ["mustafaozturk34", "beyzabb", "hilalavcu6","Fatmakarasayar", "ibrahim-yildirim", "engindemirog"]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let list = [];
    this.usersList.forEach(element => {
      this.userService.getUsers(element).subscribe(data => {
        list.push(data);
      })
    })
    this.users = list
  }

}
