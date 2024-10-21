import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  email: string = 'izabelawlazlo9@gmail.com';

  public downloadCv(): void {
    window.open('https://izabelkawl.github.io/cv/', '_blank');
  }

  public openMail(): void {
    window.open(`mailto:${this.email}`);
  }
}
