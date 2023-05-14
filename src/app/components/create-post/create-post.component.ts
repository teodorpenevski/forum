import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PostService } from "../../services/post.service";
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  tags: Set<string> = new Set();

  postForm = new FormGroup({

    title: new FormControl('', [
      Validators.required,
    ]),

    text: new FormControl('', [
      Validators.required,
    ]),

    tags: new FormControl(['']),

    tagsInput: new FormControl('')

  })

  constructor(private service: PostService) { }

  ngOnInit(): void {
  }

  createPost() {
    this.postForm.patchValue({ tags: Array.from(this.tags) });

    delete this.postForm.value.tagsInput;

    console.log(this.postForm.value);

    this.service.createPost({ title: this.postForm.value.title!!, text: this.postForm.value.text!!, tags: this.parseStringToTag(this.postForm.value.tags!!) }).subscribe();
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

  parseStringToTag(tagNames: string[]): Tag[] {
    const parsedTags: Tag[] = [];
    for (let tagName of tagNames) {
      parsedTags.push({ name: tagName });
    }
    return parsedTags;
  }
}
