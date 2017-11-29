import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<nav>
  <ul>
    <li (click)="routing = 1">Dumy 1</li>
    <li (click)="routing = 2">Dumy 2</li>
    <li (click)="routing = 3">Dumy 3</li>
  </ul>
</nav>
<dummy1 *ngIf="routing === 1"></dummy1>
<dummy2 *ngIf="routing === 2"></dummy2>
<dummy3 *ngIf="routing === 3"></dummy3>
<!--<router-outlet></router-outlet>-->
  `,
  styles: [`
    li { list-style-type: none; }
  `]
})
export class AppComponent {
  routing: string;
}
