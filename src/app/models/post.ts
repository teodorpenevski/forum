import { Tag } from "./tag";
import { Comment } from "./comment";

export interface Post {
  id: number;
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  createdBy: string;
  tags: Tag[];
  comments: Comment[];
}

export interface PostDTO {
  title: string;
  text: string;
  tagNames: string[];
}

// export interface Post {
//   type: String;
//   heading: String;
//   body: String;
// }
