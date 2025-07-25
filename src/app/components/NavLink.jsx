import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 group"
    >
      {title}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
    </Link>
  );
};

export default NavLink;