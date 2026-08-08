const features = [
  { title: "Verified providers", description: "Every professional is background checked." },
  { title: "Fair pricing", description: "Transparent quotes before you book." },
  { title: "Fast booking", description: "Schedule a visit in a few clicks." },
];

function Features() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Why choose Homefix
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

