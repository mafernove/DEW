import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { UserNewComponent } from './access/user-new/user-new.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ApartmentComponent } from './pages/apartment/apartment.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user-new', component: UserNewComponent },
    { path: 'project/:id', component: ProjectComponent },
    { path: 'apartment/:id', component: ApartmentComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}