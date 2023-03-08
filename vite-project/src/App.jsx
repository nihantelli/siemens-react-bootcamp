import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import User from "./components/User";
import "./App.css";
import Paragraph from "./components/Paragraph";
const data = [
  { id: 1, name: "nihan", surname: "telli" },
  { id: 2, name: "ayse", surname: "telli" },
  { id: 3, name: "fatma", surname: "telli" },
];
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <Paragraph content="paragraf1" />
      <User data={data} title="users" isVisible={true} />
    </div>
  );
}

export default App;
