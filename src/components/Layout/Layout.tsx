import { Link, Outlet, useLocation } from 'react-router-dom'

import styles from './Layout.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout(){
    const location=useLocation()
    console.log(location.pathname)
    return(
        <>
        <div className={styles.page}>
       
            <Header/>
        <main className={styles.main}>
            <Outlet/>
           
            </main>
        <Footer/>
</div>
        </>
    )
}
export default Layout