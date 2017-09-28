import {Component, OnInit, HostBinding} from '@angular/core';
import {
    AngularFire, AngularFireModule, FirebaseListObservable, AuthProviders, AuthMethods,
    FirebaseObjectObservable
} from 'angularfire2';
import {Router} from '@angular/router';
import {moveIn} from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [moveIn()],
    host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
    persons: FirebaseObjectObservable<any>;

    error: any;

    constructor(public af: AngularFire, private router: Router) {
        this.persons = af.database.object('/persons/2');
        this.af.auth.subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl('/members');
            }
        });

    }

    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Password,
        }).then(
            (success) => {
                this.router.navigate(['/members']);
            }).catch(
            (err) => {
                this.error = err;
            })
    }


    ngOnInit() {
    }

}
