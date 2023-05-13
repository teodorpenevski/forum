import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post, PostDTO } from "../../models/post";
import { Tag } from "../../models/tag";

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() postId: number = 1;

  @Input() postInfo: PostDTO = {
    title: 'Post Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ' +
      'ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. ' +
      'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. ' +
      'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.',
    tagNames: ['tag1', 'tag2', 'tag3']
  }

  votes = 10;
  commentsLength = 2;
  author = 'Author';
  created = '2020-01-01';
  createdBy = 'User';
  constructor(private service: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.service.getPost(this.postId).subscribe(post => this.setPost(post));
  }

  setPost(post: Post | null) {
    if (post) {
      this.postInfo.title = post.title;
      this.postInfo.text = post.text;
      for (const [index, tag] of post.tags.entries()) {
        this.postInfo.tagNames[index] = tag.name;
      }
      this.createdBy = post.createdBy;
      this.votes = post.likes - post.dislikes;
      this.commentsLength = post.comments.length;
    }
  }
}
