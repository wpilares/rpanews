import { type ReactElement } from 'react';
import styles from './NavBar.module.scss';

export const NavBar = (): ReactElement => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#">Inicio</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Acerca de</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
