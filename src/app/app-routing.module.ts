import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoverComponent } from './pages/rover/rover.component';
import { RoverResolver } from './resolvers/rover.resolver';

const routes: Routes = [
  {
    path: '',
    component: RoverComponent,
    resolve: {
      rover: RoverResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
