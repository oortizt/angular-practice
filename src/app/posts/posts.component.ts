import { NotFoundError } from './../common/not-found-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service: PostsService) { 
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

   // This method use optimistic update (Add inmediately and if something goes wrong rollback the changes)
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
        }, 
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof NotFoundError) {
            // The server response with the valdiation that violates this request
            // this.form.setErrors(error.originalError);
          } else throw error;                        
        }
      );
  }

  updatePost(post) {
    // Use patch to update an object partially
    this.service.update(post)
    .subscribe(
      updatedPost => {
        console.log(updatedPost);
      }, 
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post does not exists.')
        else throw error;  
      }
    );

    // Use put to update an entire object
    //this.http.put(this.url, JSON.stringify(post))
    //.subscribe(response => {
    //  post['id'] = response.json().id;
    //  this.posts.splice(0, 0, post);
    //});
  }

  // This method use optimistic update (Deletes inmediately and if something goes wrong rollback the changes)
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    
    this.service.delete(post.id)
      .subscribe(
        null, 
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.')
          else throw error;  
        }
      );
  }

}
