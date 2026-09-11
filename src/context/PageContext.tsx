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
  interest: string;
};

type LogInForm = {
  email: string;
  password: string;
};

type ListingForm = {
    address: string;
    neighbourhood: string;
    city: string;
    state: string
}

type AuthContextType = {
  loading: boolean;
  registerForm: RegisterForm;
  setRegisterForm: any;
  updateRegisterField: (field: "email" | "password" | "confirm" | "name" | "phone" | "interest", value: string)=>void;
  logInForm: LogInForm;
  setLogInForm: any;
  updateLogInField: (field: "email" | "password", value: string)=>void;
  handleSaved: (id:string)=>void;
  saved:string[];
  listingForm: ListingForm;
  updateListingField: (field: "address" | "neighbourhood" | "city" | "state", value: string)=>void;
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
    interest: "",
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

  const [ saved, setSaved ] = useState<string[]>([]);

  const handleSaved = (id:string)=>{
    const savedData = [...saved];
    const savedIndex = savedData.indexOf(id);
    if(savedIndex !== -1){
      savedData.splice(savedIndex,1);
    }else{
      savedData.push(id);
    }
    setSaved(savedData);
  }
  
  const updateLogInField = (
    field: keyof typeof logInForm,
    value: string
  ) => {
    setLogInForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [listingForm, setListingForm] = useState({
    address: "",
    neighbourhood: "",
    city: "",
    state: "",
  });
  
  const updateListingField = (
    field: keyof typeof listingForm,
    value: string
  ) => {
    setListingForm((prev) => ({
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
        updateLogInField,
        handleSaved,
        saved,
        listingForm,
        updateListingField
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