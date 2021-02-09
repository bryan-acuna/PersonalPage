import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {ProfileComponent} from './profile.component';


@NgModule({
    declarations: [ProfileComponent, HeaderComponent],
    imports: [
        CommonModule
    ]
})
export class ProfileModule {}
