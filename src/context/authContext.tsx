import React, { createContext, useState } from "react";

type AuthType = {
  token: string;
  email: string;
};

type AuthContextType = {
  authenti: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};

type AppContextProviderProps = {
  children: JSX.Element;
};

export const authContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthContextProvider = ({ children }: AppContextProviderProps) => {
  const [authenti, setAuth] = useState<AuthType>({ token: "", email: "" });

  return (
    <authContext.Provider
      value={{
        authenti,
        setAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthContextProvider };
