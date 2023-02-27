import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-location-form',
  templateUrl: './add-location-form.component.html',
  styleUrls: ['./add-location-form.component.css'],
})
export class AddLocationFormComponent implements OnInit {
  @Output() addLocation = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  add(zipCode: string) {
    this.addLocation.emit(zipCode);
  }
}
