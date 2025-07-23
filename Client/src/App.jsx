import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { Container } from "lucide-react";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
