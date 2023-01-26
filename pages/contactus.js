import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";
import Footer from "../components/Footer";
import Link from "next/link";
import HamburgerMenu from "../components/HamburgerMenu";

function contactus() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <HamburgerMenu />
      <div className={styles.contact}>
        <h2>Contact us</h2>
        <br />
        <p>
          Thank you for visiting my website. If you have any questions or
          comments about my content or projects, please dont hesitate to reach
          out to me.</p>
          <p><b>Email: nagarjunarokkala.dev@gmail.com </b></p>
          <p>Social Media: You can reach me on
          my social media handles that are linked on my website <Link href="https://www.linkedin.com/in/nagarjuna-r-863702242/" target="_blank">LinkedIn</Link>
          </p>
      </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <Footer />
    </div>
  );
}

export default contactus;
