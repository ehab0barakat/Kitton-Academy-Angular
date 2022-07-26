import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ClassDetailsComponent } from './Components/class-details/class-details.component';
import { ClassesComponent } from './Components/classes/classes.component';
import { CreateClassComponent } from './Components/create-class/create-class.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: '',component:MainLayoutComponent,children:[
    {path:'classes',component:ClassesComponent},
    {path: 'classes/:id',component:ClassDetailsComponent},
    { path: 'classes/create', component:CreateClassComponent  },
    {path: 'checkout/:id',component:CheckoutComponent},
  ]},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
