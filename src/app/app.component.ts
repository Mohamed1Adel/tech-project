import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lang: any;
  constructor(private translate: TranslateService) {
    if ('lang' in localStorage) {
      this.lang = localStorage.getItem('lang');
      translate.use(this.lang);
    }else{
      translate.use(this.translate.defaultLang);
    }
  }
  title = 'tech-project';
}
