import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {
  data = [{}];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users?page=2').subscribe(posts => {
      // this.data = posts;
      console.log(posts);
      console.log(posts['page']);
      console.log(posts['per_page']);
      console.log(posts['total']);
      console.log(posts['total_pages']);
      console.log(posts['data']);
      console.log(posts['data'][11]);
      for (let i = 0; i < posts['length']; i++) {
        this.data.push(posts[i]);
      }
    });
  }

}