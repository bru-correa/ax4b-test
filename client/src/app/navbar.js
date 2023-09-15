export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 h-20 shadow-2xl">
      <a
        className="text-white ml-4 cursor-pointer text-2xl"
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
