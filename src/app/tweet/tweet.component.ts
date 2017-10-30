import { Component } from '@angular/core';
import { LikeEventChangedArgs } from '../like/like.component';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  title="Tweets";
  tweet = {
    body: 'Here is the body of the tweet',
    likesCount: 0,
    isLiked: false
  };

  constructor() { }
  
  onLikeChange(eventChangeArgs: LikeEventChangedArgs) {
    console.log("Likes changed", eventChangeArgs);
  }
}
