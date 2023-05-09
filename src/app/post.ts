import { Tag } from "./tag";
import { Comment } from "./comment";

export interface Post {
  id: number;
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  tags: Tag[];
  comments: Comment[];
}
