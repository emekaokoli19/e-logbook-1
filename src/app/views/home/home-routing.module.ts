import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard.component";


const routes: Routes = [
    {
        path: 'dashboard',
        component: Dashboard,
        children: []
    },
]

@NgModule ({
    // imports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        // Router /* The router is already a service */
    ]
})
export class HomeRouter {}