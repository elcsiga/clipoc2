import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dfx-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
