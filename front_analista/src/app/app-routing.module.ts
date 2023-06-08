import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplicationMainComponent } from "./modules/application/components/application-main/application-main.component";
import { LoginFormComponent } from "./modules/login/components/login-form/login-form.component";
import { SimulatorFormComponent } from "./modules/simulator/components/simulator-form/simulator-form.component";
import { NotFoundPageComponent } from "./modules/template/components/not-found-page/not-found-page.component";
import { PublicGuard } from "./guards/PublicGuard";
import { PrivateGuard } from "./guards/PrivateGuard";
import { CreditListMainComponent } from "./modules/credit-list/components/credit-list-main/credit-list-main.component";
import { CreditDetailMainComponent } from "./modules/credit-detail/components/credit-detail-main/credit-detail-main.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: 'login', 
        pathMatch: 'full'
    }
    ,
    {
        path: "login",
        component: LoginFormComponent,
        canActivate: [PublicGuard]
    },
    {
        path: "credit/list",
        component: CreditListMainComponent,
        canActivate: [PrivateGuard]
    },
    {
        path: "credit/detail/:id",
        component: CreditDetailMainComponent,
        canActivate: [PrivateGuard]
    },
    
    {
        path: "credit/request/:id",
        component: ApplicationMainComponent,
        canActivate: [PrivateGuard]
    },
    {
        path: "404",
        component: NotFoundPageComponent        
    },
    {
        path: '**', 
        redirectTo: '/404',
        pathMatch: 'full'
      }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {

}