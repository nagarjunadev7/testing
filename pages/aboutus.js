import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import styles from '../styles/Aboutus.module.css';
import HamburgerMenu from "../components/HamburgerMenu";

export default function aboutus() {
  return (
    <div>
        <TopNavbar />
        <Navbar />
        <HamburgerMenu />
        <div className={styles.aboutus}>
        <h2>About us </h2>
        <br/>
        <br/>
        <p>At our company, we specialize in providing QR code solutions for businesses and individuals. Our services include both QR code scanners and QR code generators.</p>
        <br/>
        <p>Our QR code scanner is a mobile app that allows users to quickly and easily scan QR codes and access the information or action associated with them. Our scanner is user-friendly and compatible with a wide range of devices, making it accessible to a wide range of users. Our scanner can be used for a variety of purposes such as marketing, event management, education, retail, healthcare and transportation.</p>
        <br/>
        <p>Our QR code generator, on the other hand, is a powerful tool that allows businesses and individuals to easily create their own QR codes. With our generator, users can create QR codes for a variety of purposes, including marketing, event management, education, retail, healthcare, and transportation. Our generator is user-friendly and easy to use, making it accessible to a wide range of users, even those with no technical experience.</p>
        <br/>
        <p>We understand the importance of convenience and efficiency in todays fast-paced world and thats why we strive to provide our customers with the best QR code solutions. Our QR code scanner and generator allow businesses and individuals to share and access information quickly and easily. With our services, businesses can improve their marketing campaigns, event registration process and customer service. Our solutions help to make the shopping experience more convenient, improve patient outcomes and make travel more enjoyable for passengers.</p>
        <br/>
        <p>We are dedicated to providing our customers with the best service possible and always strive to stay up-to-date with the latest technology and trends in the industry. With our expertise in QR codes, we are confident that we can help our customers take their business to the next level.</p>
        <br/>
        <p>In conclusion, our company offers a comprehensive QR code solution that includes both QR code scanner and QR code generator. Our solutions are designed to improve efficiency and convenience for businesses and individuals in various industries. Whether you are a business owner, marketer, event organizer or student, our QR code scanner and generator can help you save time and make your work more efficient. Feel free to contact us for more information about our services.</p>
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
  )
}
