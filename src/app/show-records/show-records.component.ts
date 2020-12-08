import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recordType } from '../shared/recordType.model';
import { dataStoreService } from '../shared/dataStore.service';

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css'],
})
export class ShowRecordsComponent implements OnInit {
  public data: recordType[] = [];
  public totalPages: number;
  public currentPage: number;

  constructor(private http: HttpClient, private dataService: dataStoreService) {
    this.data = this.dataService.data;
    this.totalPages = this.dataService.totalPages;
  }

  ngOnInit(): void {
    this.dataService.getData(1);
    this.data = this.dataService.data;
  }
  getData(currentPage) {
    this.dataService.getData(currentPage);
    this.data = this.dataService.data;
  }
  onDelete(id) {
    this.dataService.onDelete(id);
    this.getData(this.currentPage);
  }

}