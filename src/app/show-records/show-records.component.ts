import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recordType } from '../shared/recordType.model';

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css'],
})
export class ShowRecordsComponent implements OnInit {
  public data: recordType[] = [];
  public totalPages: number;
  public currentPage: number;

  @Output() onSubmit = new EventEmitter<recordType>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData(1);
  }
  getData(currentPage) {
    this.http.get('https://reqres.in/api/users?page=' + currentPage).subscribe(posts => {
      this.totalPages = posts['total_pages'];
      // console.log(posts);
      this.data = [];
      for (let i = 0; i < posts['data'].length; i++) {
        this.data.push({ firstName: posts['data'][i]['first_name'], lastName: posts['data'][i]['last_name'], avatar: posts['data'][i]['avatar'], id: posts['data'][i]['id'] });
      }
    });
  }
  onDelete(id) {
    // console.log(id);
    this.http.put('https://reqres.in/api/users/' + id, '').subscribe(posts => {
      console.log(posts);
      this.getData(this.currentPage);
    });
  }

  onSubmitForm(id) {
    // console.log(this.data[id]);
    this.onSubmit.emit(this.data[id]);
  }
}