import { recordType } from '../shared/recordType.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class dataStoreService implements OnInit {

    public data: recordType[] = [];
    public id: number;
    public totalPages: number;

    constructor(private http: HttpClient) {
        this.getData(0);
    }

    ngOnInit(): void { }

    public getData(id: number) {
        this.http.get('https://reqres.in/api/users?page=' + id).subscribe(posts => {
            this.totalPages = posts['total_pages'];
            this.data = [];
            for (let i = 0; i < posts['data'].length; i++) {
                this.data.push({ firstName: posts['data'][i]['first_name'], lastName: posts['data'][i]['last_name'], avatar: posts['data'][i]['avatar'], id: posts['data'][i]['id'] });
            }
        });
    }
    public onDelete(id: number) {
        this.http.put('https://reqres.in/api/users/' + id, '').subscribe(posts => {
            console.log(posts);
        });
    }
}