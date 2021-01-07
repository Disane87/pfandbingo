import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pfandbingo-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
