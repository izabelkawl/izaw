import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  menu: { title: string; link?: string; isActive: boolean }[] = [
    {
      title: 'TOPBAR.ABOUT_ME',
      isActive: false,
    },
    {
      title: 'TOPBAR.WORK',
      isActive: false,
    },
    {
      title: 'TOPBAR.CONTACT',
      isActive: false,
    },
  ];

  activeItem(index: number): void {
    this.menu.forEach((item) => (item.isActive = false));
    this.menu[index].isActive = true;
  }
}
