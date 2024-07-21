import { createContext, ReactNode, useContext, useState } from "react";

interface ContextProps {
  userCredentials: UserCredentialsProps;
  setUserCredentials: Function;
}

export const UserContext = createContext<ContextProps>({
  userCredentials: {
    id: "",
    picture: "",
    given_name: "",
    family_name: "",
    email: "",
  },
  setUserCredentials: () => {},
});

export interface UserCredentialsProps {
  id: string;
  picture: string;
  given_name: string;
  family_name: string;
  email: string;
}

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userCredentials, setUserCredentials] = useState<UserCredentialsProps>({
    id: "",
    picture: "",
    given_name: "",
    family_name: "",
    email: "",
  });
  return (
    <UserContext.Provider value={{ userCredentials, setUserCredentials }}>
      {children}
    </UserContext.Provider>
  );
};
