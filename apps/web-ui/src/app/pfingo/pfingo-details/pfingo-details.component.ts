import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Pfingo } from '../state/pfingo.model';
import { PfingosService } from '../state/pfingos.service';

@Component({
  selector: 'pfandbingo-pfingo-details',
  templateUrl: './pfingo-details.component.html',
  styleUrls: ['./pfingo-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PfingoDetailsComponent implements OnInit {

  @Input() imageUrl = '';

  public pfingo: Pfingo;

  constructor(private nzModal: NzModalRef, private pringoService: PfingosService) { }

  ngOnInit(): void {



  }

}
