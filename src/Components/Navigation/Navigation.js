import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <ul className={styles.nav}>
    <li>
      <NavLink
        to='/'
        exact
        className={styles.link}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/list'
        className={styles.link}
        activeClassName={styles.active}
      >
        List
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/about'
        className={styles.link}
        activeClassName={styles.active}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
