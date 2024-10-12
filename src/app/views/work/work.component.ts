import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgClass],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  public readonly skills: string[] = ['Angular', 'JavaScript', 'TypeScript'];

  work: { [name: string]: { skills: string[]; link?: string } } = {
    CV: {
      link: 'https://izabelkawl.github.io/cv/',
      skills: [
        'Angular',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'SCSS',
        'Bootstrap',
        'Material',
      ],
    },
    'Busy Bee': {
      link: 'https://izabelkawl.github.io/BusyBee/',
      skills: [
        'Angular',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'SCSS',
        'Bootstrap',
      ],
    },
  };

  goToLink(url?: string): void {
    url && window.open(url, '_blank');
  }

  get projects(): string[] {
    return Object.keys(this.work);
  }
}
