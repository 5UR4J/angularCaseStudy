import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  object2;

  constructor(private _http:HttpClient,private router: Router) { }

  public login(userInfo: User){

    this._http
      .get("http://localhost:3000/users")
      .subscribe((result) => {
      this.object2=result;
      for(let items of this.object2){
        // this.object3.push(items);
        if(items.username==userInfo['username'] && items.password==userInfo['password']){
          console.log("ok");
          localStorage.setItem('ACCESS_TOKEN', items.username);
          localStorage.setItem('CID', items.cid);
          this.router.navigateByUrl('/loan');
        }
      }
      return false;
      })

  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}

