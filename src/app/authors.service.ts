import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ['Author 1', 'Author 2', 'Author 3'];
  }

}
