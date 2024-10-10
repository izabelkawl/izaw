import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WorkComponent } from './views/work/work.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ContactComponent } from './views/contact/contact.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UpperCasePipe } from '@angular/common';
import { TabTypes } from './components/topbar/topbar.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    WorkComponent,
    AboutMeComponent,
    ContactComponent,
    TopbarComponent,
    UpperCasePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('contact')
  workRef!: ElementRef;

  readonly #translate = inject(TranslateService);

  public currentLang: 'pl' | 'en' = 'pl';

  ngOnInit(): void {
    this.#translate.addLangs(['en', 'pl']);
    this.#translate.setDefaultLang(this.currentLang);

    const browserLang = this.#translate.getBrowserLang();
    browserLang &&
      this.#translate.use(
        RegExp(/en|pl/).exec(browserLang) ? browserLang : 'en',
      );
  }

  public changeLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'pl' : 'en';
    this.#translate.use(this.currentLang);
  }

  get langButtonLabel(): string {
    return this.currentLang === 'en' ? 'pl' : 'en';
  }

  scrollToWork(type: TabTypes): void {
    document.getElementById(type)?.scrollIntoView();
  }
}
