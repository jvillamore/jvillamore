import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent  {

  constructor() { }

  title = 'angular-store';
  items = ['Juan', 'Jose', 'Marco', 'Pedro'];
  expo:number= 0;
  
  addItem() {
    this.items.push('Nuevo Item');
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }


}
