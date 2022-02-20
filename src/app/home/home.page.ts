import { Component } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dateValue = new Date(Date.now()).toISOString();
  // format = 'yyyy-MM-dd';
  format = 'HH:mm';

  constructor() {}

  change(event) {
    console.log(event);
    this.dateValue = event;
    const new_date_value = this.formatDate(this.dateValue, this.format);
    console.log(new_date_value);
  }  

  formatDate(value: string, date_format = 'MMM dd yyyy') {
    return format(parseISO(value), date_format);
  }

  // datepipe angular, moment



}
