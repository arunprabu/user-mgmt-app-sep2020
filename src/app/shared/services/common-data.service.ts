import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  // Step 1:
  private accountName = 'Arun';

  // make the data as observable
  // Step 2: Create BehaviourSubject with default value for subscribing first
  private myAccount = new BehaviorSubject<any>(this.accountName);

  // Step 3: Create Observable for the BehaviourSubject..
  // so any component can subscribe to it.
  latestAccountName: Observable<any> = this.myAccount.asObservable();
  // then, let components subscribe to the observable

  // then, some comp can update the data by pushing next value in the observable
  constructor() {
    
  }

  // handle update from about comp.
  updateAccountName(newName) {
    console.log(newName);
    // updating the name with the newName
    this.myAccount.next(newName);
  }
}
