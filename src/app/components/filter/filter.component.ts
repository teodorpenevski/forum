import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
    @Output() cancelFilterEvent = new EventEmitter<void>();
    tags: Set<string> = new Set();
    filterForm = new FormGroup({
      sort: new FormControl('newest', [
        Validators.required,
      ]),
      noComments: new FormControl(false),
      followedTags: new FormControl('insert-tags', [
        Validators.required
      ]),
      tags: new FormControl(''),
      tagsInput: new FormControl('')
    });

    constructor(private route: ActivatedRoute,
                private router: Router
    ) { }

    ngOnInit() {
    }

    cancel() {
      this.cancelFilterEvent.emit();
    }

    apply() {
      if (!this.filterForm.valid) {
        console.log('invalid form');
        return;
      }
      delete this.filterForm.value.tagsInput;
      if (this.filterForm.value.followedTags == 'followed-tags') {
        this.filterForm.patchValue({ tags: 'followed-tags' });
        this.router.navigate(['/posts'], { queryParams: this.filterForm.value }).then(() => {
          window.location.reload();
        });
      }
      else {
        this.filterForm.patchValue({ tags: Array.from(this.tags).join("-") });
        this.router.navigate(['/posts'], { queryParams: this.filterForm.value }).then(() => {
          window.location.reload();
        });
      }
    }

    searchTags(event: any) {
      if (event.code !== 'Space') {
        return;
      }
      let tag = this.filterForm.value.tagsInput!!.trim();
      if (tag === '') {
        this.filterForm.patchValue({ tagsInput: '' });
        return;
      }
      this.filterForm.patchValue({ tagsInput: tag });
      if (this.tags.has(tag!!))
        return;
      this.tags.add(tag!!);
      this.filterForm.patchValue({ tagsInput: '' });
    }

    removeTag(tag: string) {
      this.tags.delete(tag);
    }
}
