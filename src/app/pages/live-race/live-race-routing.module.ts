import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LiveRaceComponent} from "./live-race.component";

const routes: Routes = [
  {
    path: '',
    component: LiveRaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveRaceRoutingModule {
}
