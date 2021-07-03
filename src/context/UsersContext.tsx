import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

interface UserProps {
  id: number;
  name: string;
  contact: string;
  plan: string;
}

type UserInput = Omit<UserProps, 'id'>

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextData {
  users: UserProps[];
  createUser: (user: UserInput) => Promise<void>;
}

export const UsersContext = createContext<UsersContextData>(
  {} as UsersContextData
);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    api.get('users')
      .then(response => setUsers(response.data.users))
  }, []);

  async function createUser(userInput: UserInput) {
    const response = await api.post('/users', userInput)
    const { user } = response.data;

    setUsers([
      ...users,
      user
    ])
  }

  return (
    <UsersContext.Provider value={{ users, createUser }}>
      {children}
    </UsersContext.Provider>
  )
}