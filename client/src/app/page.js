import axios from "axios";

import PostTitle from "./postTitle";

export default async function Home() {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="flex flex-col items-center mt-5">
      {posts.data.map((post) => (
        <div className="block mb-5 bg-gray-900 w-10/12 px-4 py-2">
          <PostTitle title={post.title} id={post.id} />
        </div>
      ))}
    </div>
  );
}
