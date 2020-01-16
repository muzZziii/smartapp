import { Component, OnInit } from '@angular/core';
import { oauth2 as SMART } from 'fhirclient';
import { AuthService } from './services/auth.service';
import { unwatchFile } from 'fs';
import { HelperService } from './services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private helperService: HelperService, private router: Router) {

    // SMART.init({

    // }).then(client => {

    // });
  }



  ngOnInit() {
    if (!this.authService.hasAuthToken()) {
      if (this.helperService.urlParam('code')) {
        SMART.ready().then((smart) => {
          const user = smart.patient;
        }).catch(error => {
          console.log(error);
        });
      } else {
        console.log('Not Autherized');
      }
    } else {
      this.router.navigate(['patients']);
    }

  }

}
