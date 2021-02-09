import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-buttons',
    template: `
        <button mat-button color="warn">Click me!</button>

    `,
    styles: []
})
export class ButtonsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
