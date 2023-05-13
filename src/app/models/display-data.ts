import { Post } from "./post";
import { Tag } from "./tag";

export interface DisplayData {
  heading: String;
  data: Array<Tag | Post>;
}
