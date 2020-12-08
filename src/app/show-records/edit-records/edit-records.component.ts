import { Component, OnInit, Input } from '@angular/core';
import { recordType } from '../../shared/recordType.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-records',
  templateUrl: './edit-records.component.html',
  styleUrls: ['./edit-records.component.css'],
})

export class EditRecordsComponent implements OnInit {
  @Input() public details: recordType;

  public index: number;
  constructor(private http: HttpClient, private route: ActivatedRoute) { console.log(this.details); }

  ngOnInit(): void {
    this.index = this.route.snapshot.params.id;
    // console.log(this.index);
  }
  onUpdate() {
    this.http.put('https://reqres.in/api/users/' + this.index, '{ "name": "this.details.firstName", "job": this.details.lastName }').subscribe(posts => {
      console.log("GOT RESPONSE FROM SERVER");
      console.log(posts);
    });
  }
}
