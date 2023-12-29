import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DocsComponent } from './pages/docs/docs.component';
import { OthersComponent } from './pages/others/others.component';


export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'docs', component: DocsComponent},
  {path:'others', component: OthersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class appRoutingModule {}