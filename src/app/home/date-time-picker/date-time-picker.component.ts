import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {  

  @ViewChild(IonDatetime) datetime: IonDatetime;
  @Input() type = 'date';
  @Input() min;
  @Input() max;
  @Input() date_format;
  @Input() value = new Date(Date.now()).toISOString();
  @Output() datePickerValue: EventEmitter<any> = new EventEmitter<any>();
  dateValue = '';

  constructor() { }

  ngOnInit() {}
  
  confirm() {
    this.datetime.confirm(true);
  }
  
  reset() {
    // this.datetime.reset(new Date(Date.now()).toISOString());
    this.datetime.cancel(true);
  }

  formatDate(value: string, date_format = 'MMM dd yyyy') {
    return format(parseISO(value), date_format);
  }

  change(value) {
    // this.dateValue = this.formatDate(value, this.date_format);
    this.datePickerValue.emit(value);
  }

}
