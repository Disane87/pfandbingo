import { Component, OnInit } from '@angular/core';
import { AuthQuery } from '../auth/state/auth.query';
import { PfingosQuery } from './state/pfingos.query';
import { PfingosService } from './state/pfingos.service';

@Component({
  selector: 'pfandbingo-pfingo',
  templateUrl: './pfingo.component.html',
  styleUrls: ['./pfingo.component.css']
})
export class PfingoComponent implements OnInit {

  constructor(private pfingosQuery: PfingosQuery, private pfingosService: PfingosService, private authQuery: AuthQuery) { }

  pfingos$ = this.pfingosQuery.selectAllPfingos();

  ngOnInit(): void {
  }

  delete(id: string) {
    this.pfingosService.remove(id)
  }

  fileUploaded(fileUrl: string) {
    // const uploadModal = this.modal.create({
    //   nzTitle: 'Pfingo erstellen',
    //   nzContent: PfingoDetailsComponent,
    //   nzViewContainerRef: this.viewRef,
    //   nzComponentParams: {
    //     imageUrl: fileUrl
    //   }
    // });
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
