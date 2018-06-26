import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { StoreModule } from '@ngrx/store'; 

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { thingsReducer } from './to-do-list/reducers'; 
import { ListThingService } from './to-do-list/list-thing.service'

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    StoreModule.forRoot({ 
      things: thingsReducer, 
    })
  ],
  providers: [ListThingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
