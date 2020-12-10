import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { recordType } from '../shared/recordType.model';
import { dataStoreService } from '../shared/dataStore.service';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {
  public recordDetails: recordType;
  public pageTitle: string = "Add User";

  constructor(private http: HttpClient, private route: ActivatedRoute, private dataService: dataStoreService) {
    this.recordDetails;// = this.dataService.data[this.route.snapshot.params.id];
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.id !== "new") {
      this.recordDetails = this.dataService.data[this.route.snapshot.params.id];
      this.pageTitle = "Edit User";
    } else {
      this.recordDetails = { firstName: "", lastName: "", avatar: "", id: null };
    }
  }
  public onSubmit() {
    if (this.route.snapshot.params.id !== "new") {
      this.dataService.onUpdate(this.recordDetails);
    } else {
      this.dataService.onAdd(this.recordDetails);
    }
  }
}