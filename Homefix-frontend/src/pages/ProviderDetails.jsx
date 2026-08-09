import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProviderById } from "../services/providerService";

function ProviderDetails() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    getProviderById(id).then(setProvider);
  }, [id]);

  if (!provider) {
    return (
      <p className="px-6 py-20 text-center text-slate-500">Loading...</p>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {provider.name}
        </h1>
        <p className="mt-2 text-slate-500">{provider.category}</p>
        <p className="mt-3 text-sm font-medium text-blue-600">
          Rating: {provider.rating}
        </p>
      </div>
    </section>
  );
}

export default ProviderDetails;

