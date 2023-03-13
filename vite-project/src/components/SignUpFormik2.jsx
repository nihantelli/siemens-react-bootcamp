
import { Formik, Field, Form } from "formik";
function SignUpFormik2() {
  <Formik
    initialValues={{
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    }}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    <Form>
      <Field placeholder="Jane" name="name" id="name"></Field>
      <Field placeholder="example@example.com" name="email" id="email"></Field>
      <Field name="passwordConfirm" id="passwordConfirm"></Field>
      <button type="submit">Kayıt ol</button>
    </Form>
  </Formik>;
}

export default SignUpFormik2;
