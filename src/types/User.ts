import { PropsWithChildren } from 'react';

export type User = {
  id: number;
};

export type AuthProviderProps = PropsWithChildren & {
  // isSignedIn?: boolean;
};

export type AuthContextType = {
  user: User | null;
  logout: () => void;
  login: () => void;
};