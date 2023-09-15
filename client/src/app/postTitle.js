"use client";

export default function PostTitle({ title, id }) {
  return (
    <a href={`threads/${id}`} className="text-lg hover:underline">
      {`${id}. ${title}`}
    </a>
  );
}
