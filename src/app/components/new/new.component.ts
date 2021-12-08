import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { User } from '../users/user';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private http : HttpService,

  ) { }
  user: User ={id: null, email:'', first_Name :'', job_title:'', last_Name:'', phone_no:null}

  ngOnInit(): void {
  }

  saveUser(){
    this.http.post(`user`, this.user).subscribe(
      data => {
        console.log(data)},
      error => console.log(error),
    )

  }

}
