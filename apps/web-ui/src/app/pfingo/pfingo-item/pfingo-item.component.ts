import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
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


  constructor(private pfingoService: PfingosService, public angularFireAuth: AngularFireAuth, private fireStorage: AngularFireStorage) { }

  delete(pfingo: Pfingo) {
    this.pfingoService.remove(pfingo.id.toString());
    this.fireStorage.refFromURL(pfingo.imagePath).delete().subscribe();

  }

}
