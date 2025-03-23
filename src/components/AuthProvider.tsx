import { createContext, useContext, useState } from 'react';
import { AuthContextType, AuthProviderProps, User } from '../types/User';

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: AuthProviderProps) {
  // ⚠️ STEP 1: LOAD BACKEND HERE TO GET THE CURRENT LOGGED IN USER
  // ⚠️ WE COULD USE USE EFFECT HERE FOR BACKEND API CALL
  const currentUser = JSON.parse(
    localStorage.getItem('isSignedIn') || 'null'
  ) as User | null;

  // ⚠️ STEP 2: SET CURRENT USER VALUE IN FRONTEND
  const [user, setUser] = useState<User | null>(
    currentUser ? currentUser : null
  );

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('isSignedIn');
  };

  const handleLogin = () => {
    const loggedInUser = { id: Math.floor(Math.random() * 100) + 1 };

    setUser(loggedInUser);
    localStorage.setItem('isSignedIn', JSON.stringify(loggedInUser));
  };

  return (
    <AuthContext.Provider
      value={{ user, logout: handleLogout, login: handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
