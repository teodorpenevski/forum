import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  tags: Set<string> = new Set();
  postOrEdit: string = 'Post';
  header: string = 'Create a new post';

  postForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [
      Validators.required,
    ]),
    text: new FormControl('', [
      Validators.required,
    ]),
    tags: new FormControl(['']),
    tagsInput: new FormControl('')
  })

  constructor(private service: PostService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    if (this.router.url.includes("posts/edit")) {
      const id = +(this.route.snapshot.paramMap.get('id')!!);
      this.service.getPost(id).subscribe(post => {
        if (post) {
          this.postForm.patchValue({ title: post.title });
          this.postForm.patchValue({ text: post.text });
          this.tags = new Set(post.tags.map(tag => tag.name));
        }
      });
      this.postOrEdit = 'Edit';
      this.header = 'Edit your post';
      this.postForm.patchValue({ id: id });
    }
  }

  createPost() {
    this.postForm.patchValue({ tags: Array.from(this.tags) });
    delete this.postForm.value.tagsInput;
    console.log(this.postForm.value);
    if (this.postOrEdit === 'Post') {
      this.service.createPost({ title: this.postForm.value.title!!, text: this.postForm.value.text!!, tagNames: this.postForm.value.tags!! }).subscribe({
        complete: () => this.router.navigate(['/posts'])
      });
    }
    else {
      this.service.editPost(this.postForm.value.id!!, { title: this.postForm.value.title!!, text: this.postForm.value.text!!, tagNames: this.postForm.value.tags!! }).subscribe({
        complete: () => this.router.navigate(['/posts'])
      });
    }
  }

  addToTags(event: any) {
    if (event.code !== 'Space') {
      return;
    }
    let tag = this.postForm.value.tagsInput!!.trim();
    if (tag === '') {
      this.postForm.patchValue({ tagsInput: '' });
      return;
    }
    this.postForm.patchValue({ tagsInput: tag });
    if (this.tags.has(tag!!))
      return;
    this.tags.add(tag!!);
    this.postForm.patchValue({ tagsInput: '' });
  }

  removeTag(tag: string) {
    this.tags.delete(tag);
  }

  goBack(): void {
    this.location.back();
  }
}
