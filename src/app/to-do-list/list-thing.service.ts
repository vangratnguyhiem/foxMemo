import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { Http } from '@angular/http'

// const URL = 'https://fox-memo.herokuapp.com'

const URL = 'http://localhost:3000'

@Injectable()

export class ListThingService {

  constructor(private store: Store<any>, private http: Http ) {}

  getThing(){ 
    return this.http.get(URL)
    .toPromise()
    .then(res => res.json())
    .then(resJson => {
      this.store.dispatch({ type: 'GET_THINGS', things: resJson.things })
    })
  }

  addThing(name: string){ 
    this.http.post(URL, { name })
    .toPromise()
    .then(res => res.json())
    .then(resJson => { 
      this.store.dispatch({ type: 'ADD_THING', thing: resJson.thing })
    })
  }

  removeThing(_id: string){ 
    this.http.delete(`${URL}/${_id}`)
    .toPromise()
    .then(resJson => { 
      this.store.dispatch({ type: 'REMOVE_THING', _id})
    })
  }

  checkValue(_id: string, checkOption: boolean){ 
    this.http.put(`${URL}/${_id}`, { checkOption })
    .toPromise()
    .then(res => res.json())
    .then(resJson => { 
      this.store.dispatch({ type: 'CHECK_VALUE', _id})
    })  }

}
