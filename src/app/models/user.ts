import { Post } from "./post";
import { Comment } from "./comment";

export interface User{
    username: string;
    dateJoined: string;
    postsCreated: Post[];
    commentsCreated: Comment[];
}