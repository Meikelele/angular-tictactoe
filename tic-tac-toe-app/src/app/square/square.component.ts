import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  template: `
    <button>{{ value }}</button>

  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; background: #eceff1; border: 2px solid #78909c; font-weight: bold; cursor: pointer;  }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' = 'X';
}
