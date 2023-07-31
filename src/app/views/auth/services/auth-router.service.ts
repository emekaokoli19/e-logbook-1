import { Injectable } from "@angular/core";
import { Routes } from "@angular/router";

/* Service Component for handling routing and re-routing after authentication process */

/* Service Provider */

const reRoutes: Routes = []

export class ReRouter {

}

/* Service that uses the router */
@Injectable({
    providedIn: 'root',
})
export class AuthRouterService {
    /* This router service works based on the condition of each auth process */
}
