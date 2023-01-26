import Link from "next/link";
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <ul>
            <li>
                <Link href="/"  legacyBehavior>
                Qr Code Scanner</Link>
            </li>
            <li>
                <Link href="/generate">Qr Code Generator</Link>
            </li>
            <li>
                <Link href="/aboutus">About us</Link>
            </li>
            <li>
                <Link href='/contactus'>Contact us</Link>
            </li>
        </ul>
    </div>
  )
}
