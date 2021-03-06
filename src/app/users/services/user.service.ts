import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user';

// Decorator -- makes the class dependency injectable
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // create
  createUser(userData): Promise<User> { // 1. get the data from comp
    console.log(userData);

    const addUserPromise: Promise<User> = new Promise( (resolve, reject) => {
      return this.http.post(this.REST_API_URL, userData)
        .toPromise()
        .then( ( res: User) => {
          console.log(res);
          resolve(res);
        })
        .catch( (err) => {
          console.log('Error occured', err);
          reject(err);
        })
        .finally( () => {
          console.log('Finally');
        });
    });

    return addUserPromise as Promise<User>;

    // 2. send the above data to the rest api
    // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users/
    // 2.2. What's the HTTP Method? - POST
    // 2.3. What's the REST API client? HttpClient
    // return this.http.post(this.REST_API_URL, userData)
    //   .pipe(map((res: any) => { // 3. get the resp from rest api
    //     // 4. send it back to the comp
    //     console.log(res);
    //     return res;
    //   })) // catch error, retry(3)

  }

  // read
  getUsers(): Observable<User[]> {
    console.log('Before getting all users -- in service');
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: User[]) => {
        // sort, filter, parsing, removing
        console.log(res);
        return res;
      }));
  }

  // get user by user id
  getUserByUserId(userId): Observable<User> {
    console.log(userId);
    return this.http.get(this.REST_API_URL + '/' + userId)
      .pipe(map((res: User) => {
        console.log(res);
        return res;
      }));
  }

  updateUser(contactData): Observable<User> {
    console.log(contactData);
    return this.http.put(this.REST_API_URL + '/' + contactData.id, contactData)
      .pipe(map((res: User) => {
        console.log(res);
        return res;
      }));
  }
}
