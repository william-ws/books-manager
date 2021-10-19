import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor() { }

  signIn() {
    return new Promise<void>((res, rej)=>{

        setTimeout(() => {
          this.isAuth = true;
          res();
          
        })

      });
  }

  signOut() {
    this.isAuth = false;
  }
}


 