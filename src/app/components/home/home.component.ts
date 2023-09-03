import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild("SideMenu") sideMenu!:ElementRef
constructor(){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}

editSideMenuWidth(width:any){
  this.sideMenu.nativeElement.style.width=width
}
}
