import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Simpler access to paramMap if we need to recreate the components each time
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // We need to subscribe to an observable here if we have back and forward implementations to stay in the same component
    // without recreate the entire component
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        console.log(id);
      });
  }

}
