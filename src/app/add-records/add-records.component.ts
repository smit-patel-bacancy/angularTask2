import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { recordType } from '../shared/recordType.model';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {
  public recordDetails: recordType;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.recordDetails = { firstName: "", lastName: "", avatar: "", id: null };
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    if (this.route.snapshot.params.id !== "new") {
      this.recordDetails.id = this.route.snapshot.params.id;
      this.recordDetails.firstName = "";
      this.recordDetails.lastName = "";
    }
  }
  public onSubmit() {
    if (this.route.snapshot.params.id !== "new") {
      this.onUpdate();
    } else {
      this.onAdd();
    }
  }
  public onAdd() {
    this.http.post('https://reqres.in/api/users', '{ "name": "firstName", "job": "lastName" }').subscribe(posts => {
      console.log("GOT RESPONSE FROM SERVER");
      console.log(posts);
    });
  }
  public onUpdate() {
    this.http.put('https://reqres.in/api/users/' + this.recordDetails.id, '{ "name": "this.recordDetails.firstName", "job": this.recordDetails.lastName }').subscribe(posts => {
      console.log("GOT RESPONSE FROM SERVER");
      console.log(posts);
    });
  }
}
