function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:border-none md:pt-0">
          <p>© {new Date().getFullYear()} Homefix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-slate-800">Privacy</a>
            <a href="#" className="transition-colors hover:text-slate-800">Terms</a>
            <a href="#" className="transition-colors hover:text-slate-800">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


