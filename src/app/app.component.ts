import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WorkComponent } from "./views/work/work.component";
import { AboutMeComponent } from "./views/about-me/about-me.component";
import { SkillsComponent } from "./views/skills/skills.component";
import { ContactComponent } from "./views/contact/contact.component";
import { TopbarComponent } from "./components/topbar/topbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, WorkComponent, AboutMeComponent, SkillsComponent, ContactComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  #translate = inject(TranslateService);

  currentLang: 'pl' | 'en' = 'pl'

  ngOnInit(): void {
    this.#translate.addLangs(['en', 'pl']);
    this.#translate.setDefaultLang(this.currentLang);

    const browserLang = this.#translate.getBrowserLang();
    browserLang && this.#translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }

  chengeLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'pl' : 'en'
    this.#translate.use(this.currentLang);
  }
}
