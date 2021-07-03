import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { UsersProvider } from './context/UsersContext';

export function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <Routes />
      </UsersProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
