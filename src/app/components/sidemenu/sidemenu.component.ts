import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  active: any = true;
  toggleClass: any = 'active';
  @ViewChild('side-menu') sideMenu?: ElementRef;
  lang:any = "en"
  constructor(private translate:TranslateService) {
    this.lang = this.translate.currentLang
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  
  toggleMenu() {
    this.active = !this.active;
    if (this.active) {
      this.toggleClass = 'active';
    } else {
      this.toggleClass = '';
    }
  }

  changeLanguage(){
if(this.lang == 'en'){
  localStorage.setItem('lang','ar')

}else{
  localStorage.setItem('lang', 'en');

}
window.location.reload();
  }
}
