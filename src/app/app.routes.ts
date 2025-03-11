import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'aboutUs', component: AboutUsComponent
    },
    {
        path: 'project', component: ProjectsComponent
    },
    {
        path: 'contactUs', component: ContactUsComponent
    },
    {
        path: 'Blog', component: BlogComponent
    },

];
