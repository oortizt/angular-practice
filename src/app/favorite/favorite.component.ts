import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    template: `
    <span class="glyphicon"
        [ngClass]="{
            'glyphicon-star': isFavorite,
            'glyphicon-star-empty': !isFavorite
        }"
        (click)="onClick()"></span>
    `,
    styles: [
        `.glyphicon { color: red; }`     
    ]
}) // Decorator
export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false;
    @Output('change') change = new EventEmitter();

    constructor () {
    }

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}

export interface FavoriteChangedEventArgs {
    newValue: boolean
}