import { Link, Outlet } from 'react-router-dom'

import styles from './Layout.module.css'

function Layout(){
    return(
        <>
        <div className={styles.page}>
        <header className={styles.header}>
           <Link to={'/'}>star wars gallery</Link>
           <Link to={'/gender-form'}>gender form</Link>
           <Link to={'/robot-form'}>robot form</Link>
           <Link to={'/login-form'}>my form</Link>
            
            </header>
        <main className={styles.main}>
            <Outlet/>
           
            </main>
        <footer className={styles.footer}>
            footer
            </footer>
</div>
        </>
    )
}
export default Layout