import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pfandbingo-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
