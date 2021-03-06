import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'giris', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'giris', loadChildren: './giris/giris.module#GirisPageModule' },
  { path: 'kayit', loadChildren: './kayit/kayit.module#KayitPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'kanbagis', loadChildren: './kanbagis/kanbagis.module#KanbagisPageModule' },
  { path: 'kanbagislist', loadChildren: './kanbagislist/kanbagislist.module#KanbagislistPageModule' },  { path: 'lisanslar', loadChildren: './lisanslar/lisanslar.module#LisanslarPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'mainmenu', loadChildren: './mainmenu/mainmenu.module#MainmenuPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorPageModule' },
  { path: 'doktorblooddonors', loadChildren: './doktorblooddonors/doktorblooddonors.module#DoktorblooddonorsPageModule' },
  { path: 'sube', loadChildren: './sube/sube.module#SubePageModule' },
  { path: 'subegoruntule', loadChildren: './subegoruntule/subegoruntule.module#SubegoruntulePageModule' },
  { path: 'subeler', loadChildren: './subeler/subeler.module#SubelerPageModule' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
