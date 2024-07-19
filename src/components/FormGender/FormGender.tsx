import { useFormik } from 'formik';
import styles from './FormGender.module.css';
import { useState } from 'react';
import * as Yup from 'yup';

// Компонент индикатора загрузки
const Spinner = () => (
  <div className={styles.spinner}></div>
);

interface IInputName {
  name: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .typeError('Incorrect data type')
    .required('Name is required')
    .matches(/^[\p{L}\s]+$/u, 'Please enter only letters and spaces')
    // .matches(/^[a-zA-Z\s]||[а-яА-Я\s]+$/, 'Please do not use number symbols')
});

export default function FormGender() {
  const [gender, setGender] = useState('');
  const [inputName, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: ''
    } as IInputName,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IInputName, { resetForm }) => {
      setIsLoading(true);
      setVisible(true);

      fetch(`https://api.genderize.io/?name=${values.name}`)
        .then(res => res.json())
        .then(data => {
          setGender(data.gender);
          setName(data.name);
          setIsLoading(false); // Переместите сюда, чтобы индикатор загрузки исчез после получения данных
        });

      resetForm();
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <h4>Enter name: </h4>
        <input name='name' value={formik.values.name} onChange={formik.handleChange} type="text" placeholder='Name' />
        <button type="submit">send</button>

        {formik.errors.name && <span className={styles.errors}>{formik.errors.name}</span>}

        <span className={`${visible ? styles.visible : styles.invisible}`}>
          {isLoading ? <Spinner /> : (
            <>
              Name: {inputName} <br />
              Gender: {gender}
            </>
          )}
        </span>
      </form>
    </>
  );
}
