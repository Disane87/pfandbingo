import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eui-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagComponent implements OnInit {

  @Input() isoCode: string;
  @Input() squared = true;

  constructor() { }

  ngOnInit(): void {
  }

}
