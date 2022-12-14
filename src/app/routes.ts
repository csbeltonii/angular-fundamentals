import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import 
    { 
        CreateEventComponent, 
        EventDetailsComponent, 
        EventListResolver, 
        EventRouteActivator, 
        EventsListComponent 
    } from './events/index';

export const appRoutes: Routes = [
    { 
        path: 'events', 
        component: EventsListComponent, 
        resolve: { events: EventListResolver } 
    },
    { 
        path: 'events/new', 
        component: CreateEventComponent, 
        canDeactivate: ['canDeactivateCreateEvent'] 
    },
    { 
        path: 'events/:id', 
        component: EventDetailsComponent, 
        canActivate: [EventRouteActivator] 
    },
    { 
        path: '', 
        redirectTo: '/events', 
        pathMatch: 'full' 
    },
    { 
        path: '404', 
        component: Error404Component
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module')
        .then(module => module.UserModule)
    }

]