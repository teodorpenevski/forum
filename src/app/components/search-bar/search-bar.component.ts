import {Component, HostListener} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchStatus: boolean = false;

  searchForm = new FormGroup({
    search: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  search(): void {
    let tags = this.searchForm.value.search!!.match(/\[(.*?)\]/g)?.map(x => x.replace(/\[/g, '').replace(/\]/g, ''))?.join('-') || '';
    let query = this.searchForm.value.search!!.match(/"(.*?)"/g)?.map(x => x.replace(/"|\s/g, ''))?.join('+') || '';
    this.router.navigate(['/search'], { queryParams: { q: query, tags: tags } }).then(() => {
      window.location.reload()
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    event.stopPropagation();
    this.searchStatus = true;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick() {
      this.searchStatus = false;
  }
}
