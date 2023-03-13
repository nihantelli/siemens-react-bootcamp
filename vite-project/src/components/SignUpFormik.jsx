import { useFormik } from "formik";
import validationSchema from "./validations";

function SignUpFormik() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));

      if (values.email === "test@test.com") {
        return bag.setErrors({ email: "Bu mail adresi zaten kullanımda." });
      }

      console.log(values);
      bag.resetForm();
    },
    validationSchema,
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="İsim"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          // style={{
          //   ...(errors.name && touched.name && { border: 'solid 2px red' }),
          // }}
        />

        {errors.name && touched.name && (
          <div className="error">{errors.name}</div>
        )}
      </div>
      <div>
        <input
          placeholder="E-mail"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>
      <div>
        <input
          placeholder="Parola"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
      </div>

      <div>
        <input
          placeholder="Parola Tekrarı"
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
      </div>

      <div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Gönderiliyor..." : "Kayıt Ol"}
        </button>
      </div>
    </form>
  );
}

export default SignUpFormik;
