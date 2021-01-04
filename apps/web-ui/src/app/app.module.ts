import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';



import de from '@angular/common/locales/en';

import { registerLocaleData } from '@angular/common';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroModule } from '../../../../.history/apps/web-ui/src/app/ng-zorro-module_20210104090611';

registerLocaleData(de);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, TranslocoRootModule, 
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule,
    AkitaNgRouterStoreModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NgZorroModule

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
