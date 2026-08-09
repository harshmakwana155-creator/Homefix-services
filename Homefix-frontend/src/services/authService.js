export async function loginUser(email, password) {
  return { email, token: "dummy-token" };
}

export async function registerUser(name, email, password) {
  return { name, email, token: "dummy-token" };
}
