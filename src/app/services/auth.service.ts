import { Injectable } from '@angular/core';
import { unsupported } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  hasAuthToken(): boolean {
    return sessionStorage.tokenResponse  !== undefined;
  }

}
