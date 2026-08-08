import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center px-6 py-28 text-center">
      <h1 className="text-5xl font-bold text-slate-900">404</h1>
      <p className="mt-3 text-slate-500">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
      >
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;