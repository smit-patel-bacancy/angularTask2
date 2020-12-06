import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {
  firstName;
  lastName;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.http.post('https://reqres.in/api/users', '{ "name": "firstName", "job": "lastName" }').subscribe(posts => {
      console.log("GOT RESPONSE FROM SERVER");
    });
  }
}
