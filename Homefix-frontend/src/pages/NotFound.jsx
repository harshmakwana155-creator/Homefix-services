import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-4xl font-semibold text-slate-800">404</h1>
      <p className="mt-2 text-slate-500">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
      >
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;


