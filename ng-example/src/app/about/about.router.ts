import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ABOUT_ROUTER: Routes = [
    {
        path: '',
        component: AboutComponent
    }
];

export const aboutRouter = RouterModule.forChild(ABOUT_ROUTER);
