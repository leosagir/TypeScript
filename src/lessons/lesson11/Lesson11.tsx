import styles from './Lesson11.module.css'
import LoginFormikForm from '../../components/LoginFormikForm/LoginFormikForm'

export default function Lesson11() {

  return (
    <div className="lesson-container">
        <h3 className={styles.heading}>Lesson11</h3>
        <p>Библиотека для работы с формами Formik</p>
        <div className={styles.loader}></div>
        <LoginFormikForm/>
        </div>
  )
}

