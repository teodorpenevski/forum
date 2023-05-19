import { User } from "./user";

export interface Comment {
  id: number;
  comment: string;
  createdBy: string;
  createdAt: string;
  likes: number;
  dislikes: number;
}

