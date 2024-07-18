import styles from './LoginFormikForm.module.css'
import { FormikValues, useFormik } from 'formik'


interface IFormValues{
  firstName: string
  lastName: string
  email: string
}

export default function LoginFormikForm() {
const formik = useFormik({
initialValues:{
  firstName: "",
  lastName: "",
  email: ""
}as IFormValues,


onSubmit: (values: IFormValues,{resetForm}) => {
  console.log(values)
  resetForm()
}
})


  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <input value={formik.values.firstName} name='firstName' onChange={formik.handleChange} type="text" placeholder='name'/>
        <input value={formik.values.lastName} name='lastName'  onChange={formik.handleChange} type="text" placeholder='lastname'/>
        <input value={formik.values.email} name='email' onChange={formik.handleChange} type="email" placeholder='e-mail'/>
        <button type='submit'>отправить</button>

    </form>
  )
}
