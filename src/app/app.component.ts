import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forLoops';
  public itemList:any[] = [{ name: 'ball', color: 'red'},
  { name: 'block', color: 'green'},
  { name: 'tube', color: 'purple'},
  { name: 'key', color: 'blue'},
  ];
  public forLoop:string = 'empty';
  public foreachLoop:string = 'empty';

  public runLoops(){
    this.forLoop = '';
    for(let myIndex = 0; myIndex < this.itemList.length; myIndex++){
      this.forLoop += 'Index = ' + myIndex.toString() + '; color at index = ' + this.itemList[myIndex].color + '<br/>'
    }

    console.log(this.itemList);

    this.foreachLoop = '';
    this.itemList.forEach((element, index) => { 
      this.foreachLoop += 'Index = ' + index + ' name is ' + element.name + '<br/>';
    });

    this.itemList.forEach(this.myLoopFuntion, this.title);
  }

  private myLoopFuntion(element, index, arr) {
    console.log('myLoopFunction');
    console.log('element', element);
    console.log('index = ' + index);
    console.log('array', arr);
    console.log('this context value = ', this);
  }
}
