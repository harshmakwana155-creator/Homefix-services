import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Bookings", to: "/booking" },
    { label: "Profile", to: "/profile" },
  ];

  return (
    <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white py-6 md:block">
      <nav className="flex flex-col gap-1 px-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;


