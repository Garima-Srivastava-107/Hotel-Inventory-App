import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAdComponent } from './rooms/rooms-ad/rooms-ad.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'employee',component:EmployeeComponent
    },
    {
        path:'rooms',component:RoomsComponent
    },
    {
        path:'rooms/add',component:RoomsAdComponent
    },
    {
        path:'rooms/:id',component:RoomsBookingComponent
    },
    {
     path:'login',component:LoginComponent
    },
    {
        path:'',redirectTo:'/login',pathMatch:'full'
    },
    {
        path:'**', component:NotfoundComponent
    },
    
    
];
