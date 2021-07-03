import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
