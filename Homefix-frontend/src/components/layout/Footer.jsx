function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} Homefix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}