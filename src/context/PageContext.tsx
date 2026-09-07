import {
    createContext,
    useContext,
    useState,
    type ReactNode
} from 'react';


type AuthContextType = {
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside an AuthProvider'
    );
  }

  return context;
}