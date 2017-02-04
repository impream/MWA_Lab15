import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
      <p>
      Maharishi University welcomes you!
      Jay Gurudev!!
    </p>
  `,
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
