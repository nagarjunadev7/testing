import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
  <div className={styles.container}>
    <p>Copyright © 2023 Qrcode Scanner online & Generator</p>
    <ul>
      <li>
      <Link href="/privacy">Privacy Policy</Link>
      </li>
    </ul>
  </div>
  )
}
