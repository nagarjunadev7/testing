import Link from "next/link";
import styles from "../styles/TopNavbar.module.css";
import mypic from "../public/logo.png";
import Image from 'next/image'

function TopNavbar() {
  return (
    <div className={styles.topnavbar}>
      <ul>
      <li>
      <Link href="/">
          <Image
            src={mypic}
            alt="qr code scanner online & generator" 
            className={styles.mypic}
          />
        </Link>
        </li> 
        <li>
          <Link href="/">
            <h1 className={styles.mainheading}>Qr Code Scanner & Generator Online</h1>
          </Link>
          <p>Scan smarter, with our online QR code scanner</p>
        </li>
      </ul>
    </div>
  );
}

export default TopNavbar;
