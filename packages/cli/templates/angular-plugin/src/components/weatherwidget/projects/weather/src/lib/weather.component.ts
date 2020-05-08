import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-weather',
  template: `
    <p>
      weather works!
    </p>
  `,
  styles: [],
})
export class WeatherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
