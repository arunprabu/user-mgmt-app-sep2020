import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator -- makes the class dependency injectable
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }

  // create
  createUser(userData){ // 1. get the data from comp
    console.log(userData);

    // 2. send the above data to the rest api
      // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users/
      // 2.2. What's the HTTP Method? - POST
      // 2.3. What's the REST API client? HttpClient
    return this.http.post(this.REST_API_URL, userData)
      .pipe( map( (res: any) => { // 3. get the resp from rest api
        // 4. send it back to the comp
        console.log(res);
        return res;
      }));

  }
}
