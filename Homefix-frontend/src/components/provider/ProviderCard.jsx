function ProviderCard({ provider }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="font-semibold text-slate-900">{provider.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{provider.category}</p>
      <p className="mt-3 text-sm font-medium text-blue-600">
        Rating: {provider.rating}
      </p>
    </div>
  );
}

export default ProviderCard;
