import Lesson04 from '../../lessons/Lesson04/Lesson04'
import HeroCard from '../HeroCard/HeroCard'
import StarWarsGallery from '../StarWarsGallery/StarWarsGallery'
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
           <StarWarsGallery/>
            </main>
        <footer className={styles.footer}>
            footer
            </footer>
</div>
        </>
    )
}
export default Layout