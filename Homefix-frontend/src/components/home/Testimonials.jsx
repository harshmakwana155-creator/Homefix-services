const testimonials = [
  { name: "Asha Patel", quote: "Booked a plumber in minutes, showed up on time." },
  { name: "Rohan Mehta", quote: "Easy to use and the pricing was clear upfront." },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
        What our customers say
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-slate-600 leading-relaxed">"{item.quote}"</p>
            <p className="mt-5 text-sm font-semibold text-slate-900">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

