import { Routes } from '@angular/router';
import {DashboardComponent} from './views/dashboard/component/dashboard/dashboard.component';
import {SummaryComponent} from './views/knowledge/component/summary/summary.component';
import {AddComponent} from './views/serveur/add/add.component';
import {EditComponent} from './views/serveur/edit/edit.component';
import {DeleteComponent} from './views/serveur/delete/delete.component';
import {ConfigurationComponent} from './views/utilities/configuration/configuration.component';
import {ArticleComponent} from './views/knowledge/component/article/article.component';
import {CreateArticleComponent} from './views/knowledge/component/create-article/create-article.component';
import {CategoryComponent} from './views/knowledge/component/category/category.component';
import {ProfileComponent} from './views/users/profile/profile.component';
import {ActivityLogComponent} from './views/users/activity-log/activity-log.component';
import {LoginComponent} from './views/users/login/login.component';
import {NotfoundComponent} from './views/error/notfound/notfound.component';
import {RegisterComponent} from './views/users/register/register.component';
import {inject} from '@angular/core';
import {AuthenticationService} from './core/service/auth/authentication.service';


export const routes: Routes = [

  {path:'', redirectTo:'/knowledge', pathMatch:'full'},
  // route necessitant une authentification
  {path:'',
    canMatch:[()=>inject(AuthenticationService).isAuthenticated],
    children:[
      {path:'dashboard', component:DashboardComponent, title:'Dashboard TuxFarm' },
      {path:'addServeur', component:AddComponent, title:'Add Serveur TuxFarm' },
      {path:'editServeur', component:EditComponent, title:'edit Serveur TuxFarm' },
      {path:'deleteServeur', component:DeleteComponent, title:'delete Serveur TuxFarm' },
      {path:'configuration', component:ConfigurationComponent, title:'configuration TuxFarm' },
      {path:'createArticle', component:CreateArticleComponent},
      {path:'profil', component:ProfileComponent},
      {path:'activity', component:ActivityLogComponent},
    ]},
  // routes publique
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'knowledge', component:SummaryComponent},
  {path:'category', component:CategoryComponent},
  {path:'article', component:ArticleComponent},
  {path:'**', component:NotfoundComponent},
];
