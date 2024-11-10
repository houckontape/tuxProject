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


export const routes: Routes = [
  {path:'dashboard', component:DashboardComponent, title:'Dashboard TuxFarm' },
  {path:'addServeur', component:AddComponent, title:'Add Serveur TuxFarm' },
  {path:'editServeur', component:EditComponent, title:'edit Serveur TuxFarm' },
  {path:'deleteServeur', component:DeleteComponent, title:'delete Serveur TuxFarm' },
  {path:'configuration', component:ConfigurationComponent, title:'configuration TuxFarm' },
  {path:'knowledge', component:SummaryComponent},
  {path:'category', component:CategoryComponent},
  {path:'article', component:ArticleComponent},
  {path:'createArticle', component:CreateArticleComponent},
];
