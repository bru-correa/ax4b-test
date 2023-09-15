export default function ThreadComments({ comments }) {
  return (
    <div className="bg-gray-900 px-4 py-2 w-[98%]">
      {comments.map((comment) => (
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
  );
}
