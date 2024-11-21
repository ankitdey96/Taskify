import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { WorkSpacesComponent } from './work-spaces/work-spaces.component';
import { BoardComponent } from './board/board.component';

export const routes: Routes = [
     { path: '', component: HomeComponent   }, // Default route
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'workspaces',
        component:WorkSpacesComponent
    },
    { path: 'board/:id', component: BoardComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }