import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowRecordsComponent } from './show-records/show-records.component';
import { AddRecordsComponent } from './add-records/add-records.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { dataStoreService } from './shared/dataStore.service';

const appRoutes: Routes = [
  { path: 'recordlist', component: ShowRecordsComponent },
  { path: 'recordlist/:id', component: AddRecordsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowRecordsComponent,
    AddRecordsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [dataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
