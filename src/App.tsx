import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SignUp } from "./components/SignUp";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <SignUp />
      {/* <Header />
      <Body />
      <Footer /> */}
      <GlobalStyle />
    </>
  );
}
