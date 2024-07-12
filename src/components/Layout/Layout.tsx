import Lesson04 from '../../lessons/Lesson04/Lesson04'
import HeroCard from '../HeroCard/HeroCard'
import styles from './Layout.module.css'

function Layout(){
    return(
        <>
        <div className={styles.page}>
        <header className={styles.header}>
            header
            </header>
        <main className={styles.main}>
            main
            <Lesson04/>
            </main>
        <footer className={styles.footer}>
            footer
            </footer>
</div>
        </>
    )
}
export default Layout