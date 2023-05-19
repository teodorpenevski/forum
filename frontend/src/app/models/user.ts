import { Post } from "./post";
import { Comment } from "./comment";

export interface User {
  username: string;
  dateJoined: string;
  postsCreated: Post[];
  commentsCreated: Comment[];
  postsLiked: Post[];
  postsFollowed: Post[];
  commentsLiked: Comment[];
}

export interface UserDto {
  username: string;
}
