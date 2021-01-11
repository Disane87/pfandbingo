import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pfingo } from '../state/pfingo.model';
import { PfingosService } from '../state/pfingos.service';

@Component({
  selector: 'pfandbingo-pfingo-item',
  templateUrl: './pfingo-item.component.html',
  styleUrls: ['./pfingo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PfingoItemComponent {

  @Input() pfingo: Pfingo;

  public imageLoading = true;

  constructor(private pfingoService: PfingosService) { }

  delete(id: string) {
    this.pfingoService.remove(id)
  }

}
