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

    filterForm = new FormGroup({
      sort: new FormControl('newest', [
        Validators.required,
      ]),
      noComments: new FormControl(null),
      followedTags: new FormControl('insert-tags', [
        Validators.required
      ]),
      tags: new FormControl('', [
      ])
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
        console.log("not valid");
        return;
      }
      if (this.filterForm.value.tags === '') {
        delete this.filterForm.value.tags;
      }
      console.log('applied filters: ', this.filterForm.value);
      this.router.navigate(['/posts'], { queryParams: this.filterForm.value });
      this.filterForm.reset(this.filterForm.value);
    }

    searchTags(event: any) { // Search for tags and delimit with space
    }
}
