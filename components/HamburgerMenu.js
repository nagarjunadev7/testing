import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/HamburgerMenu.module.css'

const HamburgerMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
    <br/>
      <button
        className={styles.hamburgerButton}
        onClick={handleMenuClick}
      >
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </button>
      {isMenuVisible && (
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              QR Code Scanner
            </Link>
          </li>
          <li>
            <Link href="/generate">
              QR Code Code Generator
            </Link>
          </li>
          <li>
            <Link href="/aboutus">
              About us
            </Link>
          </li>
          <li>
            <Link href="/contactus">
              Contact us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
