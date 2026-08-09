import Sidebar from "../components/layout/Sidebar";

function Dashboard() {
  return (
    <div className="mx-auto flex max-w-6xl">
      <Sidebar />
      <section className="flex-1 px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="mt-2 text-slate-500">
          Overview of your bookings and account activity.
        </p>
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm text-slate-500">
            No recent activity yet.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
