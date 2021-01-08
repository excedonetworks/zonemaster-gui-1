import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  readonly login_url = 'https://excedo:5Wew2SZgV69fhiAhPtszJY9ydQ3fKg@dnsbox.excedonet.net/salesforce/opportunity/create.php'

  result: any;

  loginPayload = {
    name: 'test api',
    StageName: 'test api',
    CloseDate: '2023-03-03'
  }

  postData: any;

  constructor(private http: HttpClient) { }

  runGetHelp() {
    this.http.get(this.login_url).toPromise().then(data => {
      console.log(data)
    });
  }

  ngOnInit(): void {
  }

}
