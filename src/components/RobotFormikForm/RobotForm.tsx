import styles from './RobotForm.module.css';
import { FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

export default function RobotForm() {

  const schema = Yup.object().shape({
    model: Yup
      .number()
      .typeError('Номер должен содержать число')
      .required('Модель обязательна к заполнению')
      .min(100, 'Модель должна начинаться с 100!')
      .max(1000, 'Модель до 1000'),
    creator: Yup
      .string()
      .required('Укажите, кто ваш создатель'),
    email: Yup
      .string()
      .email('Некорректный формат')
      .required('Email вашей компании обязателен')
  });

  const formik = useFormik({
    initialValues: {
      model: "",
      creator: "",
      email: ""
    } as IFormValues,
    validationSchema: schema,
    onSubmit: (values: IFormValues, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <div>
        <input
          value={formik.values.model}
          name='model'
          onChange={formik.handleChange}
          type="text"
          placeholder='Ваша модель'
        />
        {formik.errors.model && formik.touched.model ? (
          <div>{formik.errors.model}</div>
        ) : null}
      </div>
      <div>
        <input
          value={formik.values.creator}
          name='creator'
          onChange={formik.handleChange}
          type="text"
          placeholder='Имя создателя'
        />
        {formik.errors.creator && formik.touched.creator ? (
          <div>{formik.errors.creator}</div>
        ) : null}
      </div>
      <div>
        <input
          value={formik.values.email}
          name='email'
          onChange={formik.handleChange}
          type="email"
          placeholder='e-mail создателя'
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type='submit'>Отправить</button>
    </form>
  );
}
