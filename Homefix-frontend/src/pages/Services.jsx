import { useEffect, useState } from "react";
import { getProviders } from "../services/providerService";
import ProviderCard from "../components/provider/ProviderCard";

function Services() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders().then(setProviders);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Available providers
      </h1>
      <p className="mt-2 text-slate-500">
        Browse verified professionals ready to help.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  );
}

export default Services;
