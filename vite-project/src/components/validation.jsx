import { object, string, ref } from 'yup';

const messages = {
  required: 'Bu alan zorunludur.',
  email: 'Geçerli bir email belirtin.',
};

const validations = object({
  name: string().required(messages.required),
  email: string().email(messages.email).required(messages.required),
  password: string()
    .min(6, 'En az 6 karakter girmelisiniz.')
    .required(messages.required),
  passwordConfirm: string()
    .oneOf([ref('password')], 'Parolalar uyuşmuyor.')
    .required(messages.required),
});

export default validations;