import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private http : HttpService,
    private fb: FormBuilder,

  ) { }

  users: User[] = [{id: null, email:'', first_Name :'', job_title:'', last_Name:'', phone_no:null}]
  userForm: FormGroup;


  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: null,
      email:'',
      first_Name :'',
      job_title:'',
      last_Name:'',
      phone_no:null
    });

    this.http.get("user").subscribe(
      data => {
        this.users = data
        console.log(data)},
      error => console.log(error),
    )
  }
  saveUser(id){
    let index= this.users.findIndex(user => user.id === id)
    console.log(index);

    this.http.put(`user/${[id]}`, this.users[index]).subscribe(
      data => {
        console.log(data)},
      error => console.log(error),
    )
  }

  deleteUser(id){
    this.http.delete(`user/${[id]}`).subscribe(
      data => {
        console.log(data)},
      error => console.log(error),
    )

  }

}
