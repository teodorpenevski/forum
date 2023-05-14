import { PostDTO } from "../models/post";
import { Tag } from "../models/tag";

export interface DisplayData {
  heading: String;
  type: String;
  data: Array<Tag | PostDTO>;
}
