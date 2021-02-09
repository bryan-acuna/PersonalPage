import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ProfileModule} from './profile/profile.module';

const routes: Routes = [
    {
        path: 'profile', loadChildren: () =>
            import('./profile/profile.module')
                .then(m => m.ProfileModule)
    },
    {
        path: '**', redirectTo: 'profile'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ProfileModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
