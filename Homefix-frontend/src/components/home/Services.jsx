const services = [
  { title: "Plumbing", description: "Leak repairs, installations, and maintenance." },
  { title: "Electrical", description: "Wiring, fixtures, and safety inspections." },
  { title: "Cleaning", description: "Home and office cleaning services." },
  { title: "Painting", description: "Interior and exterior painting work." },
];

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
        Our services
      </h2>
      <p className="mx-auto mt-3 max-w-md text-center text-slate-500">
        Every job matched with a verified local professional.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
