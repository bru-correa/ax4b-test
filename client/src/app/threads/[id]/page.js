import axios from "axios";

import ThreadPost from "@/app/components/threadPost";
import ThreadComments from "@/app/components/ThreadComments";

export default async function Thread({ params }) {
  try {
    const threadRequest = await axios.get(
      `http://localhost:8080/api/threads/${params.id}`,
    );
    const thread = threadRequest.data;
    return (
      <div className="flex flex-col w-10/12 mt-5 items-center">
        <ThreadPost post={thread.post} />
        <ThreadComments comments={thread.comments} />
      </div>
    );
  } catch (error) {
    console.log(error);
    return <h1 className="text-4xl font-bold mt-5">Post not found!</h1>;
  }
}
