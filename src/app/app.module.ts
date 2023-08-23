import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { RatesComponent } from './components/rates/rates.component';
import { ReadsComponent } from './components/reads/reads.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ManageTableComponent } from './components/manage-table/manage-table.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {DataTablesModule}from 'angular-datatables'
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidemenuComponent,
    PersonInfoComponent,
    RatesComponent,
    ReadsComponent,
    SearchBarComponent,
    PersonsListComponent,
    CalendarComponent,
    ManageTableComponent,
    CommentsComponent,
    SingleCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgbModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    DataTablesModule,
    MatTableModule,
    MatCheckboxModule,
    MatSliderModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    CdkStepperModule,
    CdkMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
