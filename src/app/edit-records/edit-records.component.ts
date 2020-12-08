import { Component, OnInit, Input, HostListener } from '@angular/core';
import { recordType } from '../shared/recordType.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-records',
  templateUrl: './edit-records.component.html',
  styleUrls: ['./edit-records.component.css'],
})

export class EditRecordsComponent implements OnInit {
  public details: recordType;
  public index: number;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params.id;
    console.log(this.index);
  }
  onUpdate() {
    this.http.put('https://reqres.in/api/users/' + this.index, '{ "name": "this.details[index].firstName", "job": this.details[index].lastName }').subscribe(posts => {
      console.log("GOT RESPONSE FROM SERVER");
      console.log(posts);
    });
  }
}
