import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent implements OnInit {
  @Output()
  onInput = new EventEmitter<string>();

  inputvalue = new FormControl('');

  constructor() {}

  inputOccured() {
    this.onInput.emit(this.inputvalue.value);
  }

  ngOnInit(): void {}
}
