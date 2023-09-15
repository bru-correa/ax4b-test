"use client";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 h-20 shadow-2xl sticky top-0">
      <a
        className="text-white font-bold ml-4 cursor-pointer text-3xl hover:text-slate-400 underline"
        href="http://localhost:3000"
      >
        Super True News
      </a>
      <i className="text-white mr-10 text-lg">
        The news forum that you can definitely trust!
      </i>
    </nav>
  );
}
