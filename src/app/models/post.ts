import { Tag } from "./tag";
import { Comment } from "./comment";
import { User } from "./user";

export interface Post {
  id: number;
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  createdBy: User;
  createdAt: string;
  updatedAt: string;
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
