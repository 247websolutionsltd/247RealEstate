import {
  createContext,
  useContext,
  useState,
  type ReactNode
} from 'react';

type RegisterForm = {
  email: string;
  password: string;
  confirm: string;
  name: string;
  phone: string;
};

type LogInForm = {
  email: string;
  password: string;
};

type AuthContextType = {
  loading: boolean;
  registerForm: RegisterForm;
  setRegisterForm: any;
  updateRegisterField: (field: "email" | "password" | "confirm" | "name" | "phone", value: string)=>void;
  logInForm: LogInForm;
  setLogInForm: any;
  updateLogInField: (field: "email" | "password", value: string)=>void;
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
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirm: "",
    name: "",
    phone: "",
  });
  
  const updateRegisterField = (
    field: keyof typeof registerForm,
    value: string
  ) => {
    setRegisterForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });
  
  const updateLogInField = (
    field: keyof typeof logInForm,
    value: string
  ) => {
    setLogInForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        registerForm,
        setRegisterForm,
        updateRegisterField,
        logInForm,
        setLogInForm,
        updateLogInField
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