import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabTypes } from './topbar.models';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  @Output() activeTab: EventEmitter<TabTypes> = new EventEmitter<TabTypes>();

  menu: { title: string; type: TabTypes; isActive: boolean }[] = [
    {
      title: 'TOPBAR.ABOUT_ME',
      type: 'about_me',
      isActive: false,
    },
    {
      title: 'TOPBAR.WORK',
      type: 'work',
      isActive: false,
    },
    {
      title: 'TOPBAR.CONTACT',
      type: 'contact',
      isActive: false,
    },
  ];

  activeItem(index: number): void {
    this.menu.forEach((item) => (item.isActive = false));
    this.menu[index].isActive = true;
    
    this.activeTab.emit(this.menu[index].type)
  }
}
