import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService extends DataService{

  constructor(http: Http) {
    // Create an isntance of the parent class 
    super('http://jsonplaceholder.typicode.com/posts', http);
  }


}
