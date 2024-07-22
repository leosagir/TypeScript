// Header.tsx
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { links } from './links';

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      {links.map((link) => (
        <Link
          key={link.pathname}
          className={location.pathname === link.pathname ? styles.active : ''}
          to={link.pathname}
        >
          {link.title}
        </Link>
      ))}
    </header>
  );
}

export default Header;
