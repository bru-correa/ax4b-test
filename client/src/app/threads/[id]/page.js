import axios from "axios";

export default async function Thread({ params }) {
  const threadRequest = await axios.get(
    `http://localhost:8080/api/threads/${params.id}`,
  );
  const threadData = threadRequest.data;
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-sky-300 text-2xl">{threadData.post.title}</h1>
        <p>{threadData.post.body}</p>
      </div>
      <div>
        {threadData.comments.map((comment) => (
          <div className="mt-6">
            <p className="text-gray-400/75 text-sm">username: {comment.name}</p>
            <p className="text-gray-400/75 text-sm">email: {comment.email}</p>
            <p className="text-base">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
