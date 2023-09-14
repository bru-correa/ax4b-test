import { Post } from "./post";
import { Comment } from "./comment";

export interface Thread {
  post: Post;
  comments: Comment[];
}
