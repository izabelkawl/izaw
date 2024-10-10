import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  public readonly skills: string[] = ['Angular', 'JavaScript', 'TypeScript'];

  work: { [name: string]: { skills: string[] } } = {
    CV: {
      skills: ['Angular', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
    'Busy Bee': {
      skills: ['Angular', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
  };

  get projects(): string[] {
    return Object.keys(this.work);
  }
}
