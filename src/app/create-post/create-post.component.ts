import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
    tags: Set<string> = new Set();
    postForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      title: new FormControl('', [
        Validators.required,
      ]),
      text: new FormControl('', [
        Validators.required,
      ]),
      tags: new FormControl(['']),
      tagsInput: new FormControl('')
    })

    constructor() { }

    ngOnInit(): void {
    }

    createPost() {
      this.postForm.patchValue({tags: Array.from(this.tags)});
      delete this.postForm.value.tagsInput;
      console.log(this.postForm.value);
    }

    addToTags(event: any) {
      if (event.code !== 'Space') {
        return;
      }
      let tag = this.postForm.value.tagsInput!!.trim();
      if (tag === '') {
        this.postForm.patchValue({tagsInput: ''});
        return;
      }
      this.postForm.patchValue({tagsInput: tag});
      if (this.tags.has(tag!!))
        return;
      this.tags.add(tag!!);
      this.postForm.patchValue({tagsInput: ''});
    }

    removeTag(tag: string) {
      this.tags.delete(tag);
    }
}
