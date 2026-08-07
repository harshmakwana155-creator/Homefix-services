import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Bookings", to: "/booking" },
    { label: "Profile", to: "/profile" },
  ];

  return (
    <aside className="hidden w-56 shrink-0 border-r border-slate-200 bg-white md:block">
      <nav className="flex flex-col gap-1 p-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;

