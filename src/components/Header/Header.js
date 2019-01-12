import React from 'react';
import Link from 'gatsby-link';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <h1 className={'title is-2 has-text-weight-bold'}>
        <Link to="/" className={styles.link}>
          International Offensive
        </Link>
        <p className="latest-version">v0.1</p>
      </h1>
    </div>
  </div>
);

export default Header;
