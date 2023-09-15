"use client";

export default function PostTitle({ post }) {
  const body = post.body.slice(0, 50);

  return (
    <div>
      <a
        href={`threads/${post.id}`}
        className="text-lg font-bold hover:underline"
      >
        {`${post.id}. ${post.title}`}
      </a>
      <p className="text-sm text-gray-500">{body}...</p>
    </div>
  );
}
