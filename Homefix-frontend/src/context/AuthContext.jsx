import { createContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Dummy login until the backend is connected.
    const fakeUser = { email, name: "Test User" };
    setUser(fakeUser);
    return fakeUser;
  };

  const register = async (name, email, password) => {
    const fakeUser = { name, email };
    setUser(fakeUser);
    return fakeUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
