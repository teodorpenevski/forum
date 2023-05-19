import { Tag } from "../models/tag";

export interface DisplayData {
  heading: String;
  type: String;
  data: Array<Tag | number>;
}
