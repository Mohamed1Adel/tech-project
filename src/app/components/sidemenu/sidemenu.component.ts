import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  active: any = true;
  toggleClass: any = 'active';
  toggleSideMenuClass: boolean = true;
  toggleMidSideMenuClass: boolean = false;
  sideMenuWidth:boolean = false
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('home') home!: ElementRef;
  @ViewChild('account') account!: ElementRef;
  @ViewChild('help') help!: ElementRef;
  @ViewChild('setting') setting!: ElementRef;
  @ViewChild('language') language!: ElementRef;
  @ViewChild('menuItems') menuItems!: ElementRef;
  @ViewChild('menuHeader') menuHeader!: ElementRef;
  // @ViewChild('side-menu') toggleBtn?: ElementRef;
  lang: any = 'en';
  // @ViewChild('sideMenu') sideMenu:ElementRef;
  @Output() widthEvent = new EventEmitter<string>();
  constructor(
    private renderer: Renderer2,
    private translate: TranslateService
  ) {
    this.lang = this.translate.currentLang;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.toggleMidSideMenu();
  }

  toggleMenu() {
    this.active = !this.active;
    if (this.active) {
      this.toggleClass = 'active';
    } else {
      this.toggleClass = '';
    }
  }

  changeLanguage() {
    if (this.lang == 'en') {
      localStorage.setItem('lang', 'ar');
    } else {
      localStorage.setItem('lang', 'en');
    }
    window.location.reload();
  }
  toggleSideMenu() {
    if (this.toggleSideMenuClass) {
      this.sideMenu.nativeElement.classList.add('active');
      // this.renderer.addClass(
      //   this.sideMenu.nativeElement.querySelector('.side-menu'),
      //   'active'
      // );
    } else {
      this.sideMenu.nativeElement.classList.remove('active');
      // this.renderer.removeClass(
      //   this.sideMenu.nativeElement.querySelector('.side-menu'),
      //   'active'
      // );
    }
    this.toggleSideMenuClass = !this.toggleSideMenuClass;
  }

  toggleMidSideMenu() {
    if (this.toggleMidSideMenuClass) {
      this.sideMenu.nativeElement.style.width = '80px';
      // this.menu.nativeElement.style.display = 'none';
      this.home.nativeElement.style.display = 'none';
      this.account.nativeElement.style.display = 'none';
      this.help.nativeElement.style.display = 'none';
      this.setting.nativeElement.style.display = 'none';
      this.language.nativeElement.style.display = 'none';
      // this.menuItems.nativeElement.style.display = 'none';
      this.menuHeader.nativeElement.style.display = 'none';
      this.widthEvent.emit("80px");
    } else {
      this.sideMenu.nativeElement.style.width = '250px';
      // this.menu.nativeElement.style.display = 'block';
      this.home.nativeElement.style.display = 'flex';
      this.account.nativeElement.style.display = 'flex';
      this.help.nativeElement.style.display = 'flex';
      this.setting.nativeElement.style.display = 'flex';
      this.language.nativeElement.style.display = 'flex';
      // this.menuItems.nativeElement.style.display = 'block';
      this.menuHeader.nativeElement.style.display = 'block';
      this.widthEvent.emit('250px');
    }
    this.toggleMidSideMenuClass = !this.toggleMidSideMenuClass;
    console.log(this.toggleMidSideMenuClass);
  }
}
