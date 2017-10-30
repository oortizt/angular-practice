import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likes-count')likesCount = 0;
  @Input('is-active')isActive = false;
  @Output('change')change = new EventEmitter();

  constructor() { }

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive ? +1 : -1; 
    this.change.emit({ newValue: this.isActive, likesCount: this.likesCount });
  }

}

export interface LikeEventChangedArgs {
  newValue: boolean,
  likesCount: number
}
