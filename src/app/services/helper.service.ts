import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }


  urlParam(p: any) {
    const query = location.search.replace(/^\?/, '');
    const data = query.split('&');

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      const item = data[i].split('=');
      if (item[0] === p) {
        return decodeURIComponent(item[1].replace(/\+/g, '%20'));
      }
    }

    return null;
  }

  getRedirectURI() {
    return (location.protocol + '//' + location.host + location.pathname)
      .match(/(.*\/)[^\/]*/)[1];
  }

  refreshApp() {
    return this.getRedirectURI();
  }

}
