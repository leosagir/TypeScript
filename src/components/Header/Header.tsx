import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link className={location.pathname === '/' ? styles.active : ''} to={'/'}>star wars gallery</Link>
      <Link className={location.pathname === '/gender-form' ? styles.active : ''} to={'/gender-form'}>gender form</Link>
      <Link className={location.pathname === '/robot-form' ? styles.active : ''} to={'/robot-form'}>robot form</Link>
      <Link className={location.pathname === '/login-form' ? styles.active : ''} to={'/login-form'}>my form</Link>
      <Link className={location.pathname === '/counter' ? styles.active : ''} to={'/counter'}>my counter</Link>
      <Link className={location.pathname === '/feedback' ? styles.active : ''} to={'/feedback'}>my feedback</Link>
      <Link className={location.pathname === '/home-page' ? styles.active : ''} to={'/home-page'}>homepage</Link>
    </header>
  );
}

export default Header;