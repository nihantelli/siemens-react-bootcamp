import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";
import Paragraph from "./components/Paragraph";
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <Paragraph content="paragraf1"/>
    </div>
  );
}

export default App;
