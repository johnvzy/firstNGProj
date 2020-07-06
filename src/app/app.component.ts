import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h3{
    color: blue;
  }
  `]
})
export class AppComponent {
  name = 'john';
  items: string[] = [];
  prtBankName:string = 'RBC'

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
