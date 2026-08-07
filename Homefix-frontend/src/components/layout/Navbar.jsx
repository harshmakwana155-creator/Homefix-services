import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-semibold text-slate-800">
          Homefix
        </Link>

        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <Link to="/services" className="hover:text-slate-900">Services</Link>
          <Link to="/about" className="hover:text-slate-900">About</Link>
        </nav>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


