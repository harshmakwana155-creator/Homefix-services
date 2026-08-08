import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Trusted home services,
          <span className="block text-blue-600">booked in minutes</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-500">
          Find verified professionals for repairs, cleaning, and maintenance
          near you.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/services"
            className="rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
          >
            Browse services
          </Link>
          <Link
            to="/register"
            className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            Create account
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;


