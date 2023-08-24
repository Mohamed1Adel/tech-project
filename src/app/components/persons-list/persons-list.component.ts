import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/users-data/user-modal';
import { data } from 'src/app/users-data/users';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css'],
})
export class PersonsListComponent {
  @ViewChild(MatTable) table!: MatTable<any>;
  usersList!: User[];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('settingBtns') settingBtns!: ElementRef;
  showSettingBtns: boolean = false;
  rowId: any;
  // displayedColumns: string[] = [
  //   'رقم ال id',
  //   'الاسم بالكامل',
  //   'البريد الالكتروني',
  //   'ايام العمل',
  //   'ملفات',
  //   'اعدادات',
  // ];
  displayedColumns: string[] = [
    'ID',
    'Full Name',
    'Email',
    'Work Days',
    'Files',
    'Setting'
  ];

  constructor(private userServices: UserServicesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userServices.getUser().subscribe((users) => {
      this.usersList = users;
      this.dataSource = new MatTableDataSource<User>(this.usersList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.showSetting(this.rowId);
  }

  showSetting(id: any) {
    console.log(this.settingBtns.nativeElement);
    this.showSettingBtns = !this.showSettingBtns;
    return (this.settingBtns.nativeElement.style.display = this.showSettingBtns
      ? 'block'
      : 'none');
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }
}
