import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {
    @Input() post: object = {}
    postTitle = 'Post Title';
    postId = 1;
    postText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ' +
        'ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. ' +
        'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. ' +
        'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.';
    tags = ['tag1', 'tag2', 'tag3'];
    postDate = 'January 1, 2017';
    postBy = 'John Doe';
    postVotes = 10;
    postComments = 2;
    constructor() { }
}
