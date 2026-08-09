function ProfileCard({ user }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{user?.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{user?.email}</p>
    </div>
  );
}

export default ProfileCard;
