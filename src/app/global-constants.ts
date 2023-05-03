export let apiLink = 'http://localhost:3000/api';

export interface Post {
  postId: number;
  postedBy: string;
  postedDate: string;
  postTitle: string;
  postText: string;
  comments: number[];
  commentCount: number;
}
