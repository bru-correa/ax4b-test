export default function ThreadPost({ post }) {
  return (
    <div className="mb-5 bg-gray-900 rounded-lg px-4 py-2">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-300">{post.body}</p>
    </div>
  );
}
