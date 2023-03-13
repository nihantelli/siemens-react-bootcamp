import React from "react";

function SignUp() {
  return (
    <form className="form">
      <div>
        <input placeholder="İsim" />
      </div>
      <div>
        <input placeholder="E-mail" />
      </div>
      <div>
        <input placeholder="Parola" />
      </div>
      <div>
        <input placeholder="Parola tekrar" />
      </div>
      <div>
        <button>Kayıt ol</button>
      </div>
    </form>
  );
}

export default SignUp;
