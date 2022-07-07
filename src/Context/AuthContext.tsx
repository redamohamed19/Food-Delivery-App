import { createContext, useContext, useState } from 'react';
const AuthContext: any = createContext(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser]: any = useState(null);
  const login = (user: any) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
