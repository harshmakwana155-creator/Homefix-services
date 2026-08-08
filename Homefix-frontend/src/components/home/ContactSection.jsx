function ContactSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-lg px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Still have questions?
        </h2>
        <p className="mt-3 text-slate-500">
          Reach out and our team will get back to you within a day.
        </p>
        <form className="mt-8 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
