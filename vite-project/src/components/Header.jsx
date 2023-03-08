import React from "react";

const user = "fatma";
const isLogged = true;
function Header() {
  if (!isLogged) {
    return "giriş yapın";
  }
  return (
    <div>
      <div className="header" style={{ height: "150px", border: "10px" }}>header</div>
      {`hoşgeldin ${user}`}
      {isLogged ? `hoşgeldin ${user}` : "giriş yapın"}
      {isLogged && `hoşgeldin ${user}`}
    </div>
  );
}

export default Header;
