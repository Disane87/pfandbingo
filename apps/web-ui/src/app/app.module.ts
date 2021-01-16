import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import de from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EnduranceLayoutModule } from '@pfandbingo/endurance-layout';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';

registerLocaleData(de);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, TranslocoRootModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule,
    AkitaNgRouterStoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    FontAwesomeModule,
    EnduranceLayoutModule

  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebase.storageBucket },
    { provide: LOCALE_ID, useValue: 'de-DE' },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
