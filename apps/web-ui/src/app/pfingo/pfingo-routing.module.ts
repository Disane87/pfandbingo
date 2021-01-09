import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfingoComponent } from './pfingo.component';

const routes: Routes = [{ path: '', component: PfingoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfingoRoutingModule { }
