const mockProviders = [
  { id: 1, name: "Ramesh Kumar", category: "Plumbing", rating: 4.8 },
  { id: 2, name: "Priya Singh", category: "Electrical", rating: 4.6 },
];

export async function getProviders() {
  return mockProviders;
}

export async function getProviderById(id) {
  return mockProviders.find((p) => p.id === Number(id));
}
