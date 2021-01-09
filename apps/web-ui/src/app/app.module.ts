import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import de from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadModule } from './image-upload/image-upload.module';
import { LayoutModule } from './layout/layout.module';
import { NgZorroModule } from './ng-zorro-module';
import { TodosComponent } from './todos/todos/todos.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';

registerLocaleData(de);

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, TranslocoRootModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule,
    AkitaNgRouterStoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgZorroModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    ImageUploadModule

  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebase.storageBucket }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
