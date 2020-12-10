import { recordType } from '../shared/recordType.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class dataStoreService implements OnInit {

    public data: recordType[] = [];
    public totalPages: number;
    public deletedMsg: string;

    constructor(private http: HttpClient) {
        this.getData(0);
    }

    ngOnInit(): void { }

    public getData(id: number) {
        this.http.get('https://reqres.in/api/users?page=' + id).subscribe(posts => {
            this.data = [];
            for (let i = 0; i < posts['data'].length; i++) {
                this.data.push({ firstName: posts['data'][i]['first_name'], lastName: posts['data'][i]['last_name'], avatar: posts['data'][i]['avatar'], id: posts['data'][i]['id'] });
            }
            this.totalPages = posts['total_pages'];
        });
    }
    public onDelete(id: number) {
        this.http.put('https://reqres.in/api/users/' + id, '').subscribe(posts => {
            console.log(posts);
            this.deletedMsg = posts['updatedAt'];
        });
    }
    public onAdd(recordDetails: recordType) {
        this.http.post('https://reqres.in/api/users', '{ "name": recordDetails.firstName, "job": recordDetails.lastName }').subscribe(posts => {
            console.log("Got Response From Server...");
            console.log(posts);
        });
    }
    public onUpdate(recordDetails: recordType) {
        this.http.put('https://reqres.in/api/users/' + recordDetails.id, '{ "name": recordDetails.firstName, "job": recordDetails.lastName }').subscribe(posts => {
            console.log("Got Response From Server...");
            console.log(posts);
        });
    }
}