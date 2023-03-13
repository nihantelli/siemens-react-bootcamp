import React, { useState } from "react";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, passwordConfirm });
  };
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="İsim"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="E-mail"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Parola"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Parola tekrar"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Kayıt ol</button>
      </div>
    </form>
  );
}

export default SignUp;
