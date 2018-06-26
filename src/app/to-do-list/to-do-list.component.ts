import { Component } from '@angular/core';
import { Thing } from './list-thing'
import { Store } from '@ngrx/store'; 
import { ListThingService } from './list-thing.service'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent{
  things: Thing[];
  txtThing=""; 
  // checkOption: boolean;

  constructor(private store: Store<string>, private listThingService: ListThingService){
    this.store.select('things').subscribe(thing => this.things = thing); 
    this.listThingService.getThing(); 
  }

  addThing() {
    if(!this.txtThing) return false; 
    this.listThingService.addThing(this.txtThing)
    this.txtThing="";
  }

  // checkValue(checkOption: boolean){ 
  //   return checkOption = !checkOption;
  // }

}

