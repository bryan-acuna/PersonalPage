import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {DemoRoutingModule} from './demo-routing.module';
import {ButtonsComponent} from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
    declarations: [ButtonsComponent, FlexboxComponent],
    imports: [
        CommonModule,
        DemoRoutingModule,
        MatButtonModule,
        FormsModule,
        FlexLayoutModule
    ]
})
export class DemoModule {}
