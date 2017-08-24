import { BooksManagerComponent } from './books-manager/books-manager.component';
import { RouteComponent } from './shared/route.component';
import { CanActivateAuthGuard } from './shared/can-activate.service';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { LoadChildren, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'books',
        component: RouteComponent,
        /* canActivate: [ CanActivateAuthGuard ],
        canActivateChild: [ CanActivateAuthGuard ], */
        children: [
            { path: '', component: BooksManagerComponent}
        ]
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
