import axios from "axios";

import PostTitle from "./components/postTitle";

export default async function Home() {
  try {
    const postsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const posts = postsResponse.data;
    return (
      <div className="flex flex-col items-center mt-5">
        {posts.map((post) => (
          <div className="block mb-5 bg-gray-900 w-10/12 px-4 py-2 rounded-lg">
            <PostTitle post={post} />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <h1 className="text-4xl font-bold mt-5">Failed to load main page!</h1>
    );
  }
}
