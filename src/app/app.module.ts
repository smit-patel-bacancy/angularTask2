import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowRecordsComponent } from './show-records/show-records.component';
import { AddRecordsComponent } from './add-records/add-records.component';
import { RouterModule, Routes } from '@angular/router';
import { EditRecordsComponent } from './edit-records/edit-records.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'recordlist', component: ShowRecordsComponent },
  { path: 'recordlist/new', component: AddRecordsComponent },
  { path: 'recordlist/:id', component: EditRecordsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowRecordsComponent,
    AddRecordsComponent,
    EditRecordsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
