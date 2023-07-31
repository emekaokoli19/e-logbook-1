import {Component} from "@angular/core"
import {Router} from "@angular/router";

@Component({
    templateUrl: './verify-email-success.component.html',
    providers: []
})

export class VerifyEmailSuccess {

    router!: Router

    routeToDashboard() {
        this.router.navigateByUrl('/home/dashboard').
        then((r: any) => console.log(r, "NAVIGATED TO DASHBOARD")).
        catch((e: any) => console.error(e))
    }
}
