import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthQuery } from '../auth/state/auth.query';
import { Pfingo } from './state/pfingo.model';
import { PfingosQuery } from './state/pfingos.query';
import { PfingosService } from './state/pfingos.service';

@Component({
  selector: 'pfandbingo-pfingo',
  templateUrl: './pfingo.component.html',
  styleUrls: ['./pfingo.component.css'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(300, animateChild()), { optional: true })
      ]),
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ])
  ]
})
export class PfingoComponent implements OnInit {

  constructor(private pfingosQuery: PfingosQuery, private pfingosService: PfingosService, private authQuery: AuthQuery) { }

  pfingos$ = this.pfingosQuery.selectAllPfingos();
  pfingoCount$ = this.pfingosQuery.selectCount();

  ngOnInit(): void {
  }

  trackById(pfingo: Pfingo) {
    return pfingo?.id
  }


  fileUploaded(fileUrl: string) {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((coords) => {
        this.pfingosService.add({
          imagePath: fileUrl,
          uploadDateTime: new Date().toISOString(),
          userId: this.authQuery.getValue().uid,
          location: {
            lat: coords.coords.latitude,
            long: coords.coords.latitude
          }
        }).then()
      });
    } else {

    }




  }

}
