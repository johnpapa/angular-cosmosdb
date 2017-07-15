import { Component } from '@angular/core';

@Component({
  selector: 'toh-root',
  template: `
    <h1>
      Heroes
    </h1>
    <div class="header-bar"></div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
