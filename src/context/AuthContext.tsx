import React, { createContext, useCallback } from 'react';

interface IAuthContext {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signIn works')
  }, [])

  return (
    <AuthContext.Provider value={{ name: 'José', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
