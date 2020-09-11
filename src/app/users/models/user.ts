import { Injectable } from '@angular/core';

export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
}

@Injectable({
    providedIn: 'root'
})
export class User implements IUser{
    id: number;
    name: string;
    email: string;
    phone: string;

    getUserInfo(){

    }


}
