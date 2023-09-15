import axios from "axios";

export default async function Thread({ params }) {
  try {
    const threadRequest = await axios.get(
      `http://localhost:8080/api/threads/${params.id}`,
    );
    const thread = threadRequest.data;
    return (
      <div className="flex flex-col w-10/12 mt-5 items-center">
        <div className="mb-5 bg-gray-900 rounded-lg px-4 py-2">
          <h1 className="text-3xl font-bold mb-2">{thread.post.title}</h1>
          <p className="text-gray-300">{thread.post.body}</p>
        </div>
        <div className="bg-gray-900 px-4 py-2 w-[98%]">
          {thread.comments.map((comment) => (
            <div className="mt-6 px-2 border-l border-gray-500/50">
              <div className="flex items-baseline">
                <p className="text-cyan-400 text-sm bg-cyan-950/30 rounded px-2">
                  {comment.name}
                </p>
                <p className="ml-2 text-gray-500/75 text-xs">
                  email: {comment.email}
                </p>
              </div>
              <p className="text-base text-gray-200">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <h1 className="text-4xl font-bold mt-5">Post not found!</h1>;
  }
}
