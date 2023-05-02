import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
    tags$: string[] = [];
    tags: string[] = [];
    tagsInput: string = '';
    createPostForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      title: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      tags: new FormControl('')
    })

    constructor() { }

    ngOnInit(): void {
    }

    createPost() {

    }

    searchTags(event: any) {
      this.tagsInput = event.target.value;
      console.log(this.tagsInput)
    }

    addToTags(event: any) {
      if (event.code !== 'Space')
        return;
      this.tags.push(this.tagsInput);
      this.tagsInput = '';
      console.log(this.tags)
    }
}
