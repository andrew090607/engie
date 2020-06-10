import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsPageComponent } from './news-page/news-page.component';


const routes: Routes = [
   {path: '', pathMatch: 'full', component: HomeComponent},
   {path: 'noticias', component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


