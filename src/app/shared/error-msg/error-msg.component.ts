import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMsgComponent implements OnInit {

  @Input() msgErro!: string;
  @Input() mostraErro!: boolean;
  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage() {
    for ( const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && 
          this.control.touched) {}
    }
    return null
  }

}
