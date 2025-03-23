import { login } from '@/api/auth';
import { User } from '@/types/user';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from 'react';

type AuthContext = {
  authToken?: string | null;
  currentUser?: User | null;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>();
  const [currentUser, setCurrentUser] = useState<User | null>();

  async function handleLogin() {
    try {
      const response = await login();

      const { authToken, user } = response[1];

      setAuthToken(authToken);
      setCurrentUser(user);
    } catch {
      setAuthToken(null);
      setCurrentUser(null);
    }
  }

  async function handleLogout() {
    setAuthToken(null);
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        currentUser,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used inside of a AuthProvider');
  }

  return context;
}
