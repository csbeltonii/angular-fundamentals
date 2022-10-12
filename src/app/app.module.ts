import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import 
  { 
    CreateEventComponent, 
    EventDetailsComponent, 
    EventListResolver, 
    EventRouteActivator, 
    EventService, 
    EventsListComponent, 
    EventThumbnailComponent 
  } from './events/index';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';

@NgModule({
  imports: [BrowserModule, 
            RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent, 
    EventsListComponent, 
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  bootstrap: [EventsAppComponent],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent){

  if (component.isDirty){
    return window.confirm('You have not saved this event. Do you really want to cancel?');
  }

  return true;
}