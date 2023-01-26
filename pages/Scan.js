import Link from "next/link";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import styles from "../styles/scan.module.css";

function Scan() {
  const [data, setData] = useState("No result");

  return (
    <div>
      <TopNavbar />
      <Navbar />
      <HamburgerMenu />
      <div className={styles.scan}>
        <h1>QR Code Scanner Online</h1>
        <br />
        <p>Scan smarter with our online QR code scanner</p>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          constraints={{ facingMode: "environment" }}
          style={{ width: "40%", height: "40%" }}
        />
        <Link href={data} target={"_blank"} className={styles.resultone}>
        <p className={styles.result}>{data}</p>
        </Link>
        <br />
        <br />
        <h3>Qr Code Scanner & Qr code scanner uses:</h3>
        <br />
        <p>
          QR codes, or Quick Response codes, are a type of barcode that can be
          scanned using a smartphone or a QR code scanner to quickly access
          information or perform an action. These codes have become increasingly
          popular in recent years, as they provide a convenient and efficient
          way for businesses and individuals to share and access information. In
          this article, we will discuss the various uses of QR codes and the
          benefits of using a QR code scanner.
        </p>
        <br />
        <p>
          One of the most common uses of QR codes is in marketing and
          advertising. Companies can use QR codes on billboards, posters, and
          even in print ads to give customers quick access to more information
          about their products or services. For example, a QR code on a poster
          for a new movie could take users to the movie trailer, while a QR
          code on a product packaging could take users to the product website.
          This allows companies to provide customers with more information and a
          better shopping experience without taking up valuable space on the
          physical ad or packaging. QR codes can also be used to track the
          effectiveness of marketing campaigns. By using unique QR codes for
          each campaign, companies can track how many people scanned the code
          and what actions they took, such as visiting the website or making a
          purchase. This can help companies to measure the success of their
          campaigns and make adjustments as needed.
        </p>
        <br />
        <p>
          QR codes can also be used for event management. Event organizers can
          use QR codes to provide attendees with information about the event,
          such as the schedule and location of specific activities. They can
          also use QR codes to check-in attendees, register for events, and
          purchase tickets. This can make the event registration process more
          efficient and help to keep track of attendance. Additionally, event
          organizers can use QR codes to create scavenger hunts or other
          interactive activities for attendees. This can help to make the event
          more engaging and enjoyable for attendees.
        </p>
        <br />
        <p>
          In addition, QR codes are being used in the education sector. Teachers
          can use QR codes to provide students with access to additional
          resources, such as videos and readings. They can also use QR codes to
          create interactive quizzes and assessments that students can complete
          on their own devices. This can help to make learning more interactive
          and engaging for students. Furthermore, teachers can use QR codes to
          share information with students and parents, such as homework
          assignments and class schedules. This can help to keep everyone
          informed and organized.
        </p>
        <br />
        <p>
          QR codes are also commonly used in the retail industry. Retailers can
          use QR codes to provide customers with information about products and
          services, such as prices and available sizes. They can also use QR
          codes to create loyalty programs or to allow customers to make
          purchases directly from their mobile devices. This can help to make
          the shopping experience more convenient and increase sales. Retailers
          can also use QR codes to create special promotions, such as discounts
          for scanning a QR code in-store. This can help to drive foot traffic
          and boost sales.
        </p>
        <br />
        <p>
          QR codes are also being used in the healthcare industry. Hospitals and
          clinics can use QR codes to provide patients with information about
          their medical records, test results, and appointment schedules. They
          can also use QR codes to create interactive patient education
          materials. This can help to improve patient outcomes by providing
          patients with the information they need to manage their own health.
        </p>
        <br />
        <p>
          In order to take advantage of all these benefits, a QR code scanner is
          essential. A QR code scanner is a mobile app or device that can read
          QR codes and take the user to the associated information or action.
          Some of the most popular QR code scanner apps include QR Code Reader,
          QR Code Scanner, and QR Code Scan. These apps are often free to
          download and easy to use, making them accessible to a wide range of
          users.
        </p>
        <br />
        <p>
          In conclusion, QR codes are a versatile and convenient tool that can
          be used in a variety of industries. From marketing and advertising to
          event management and education, QR codes can make it easy for users to
          access information and perform actions quickly. With the help of a QR
          code scanner, users can easily scan QR codes and take advantage of all
          the benefits they have to offer. Whether you are a business owner,
          marketer, event organizer or student, a QR code scanner can help you
          save time and make your work more efficient.
        </p>
        <br/>
        <br/>
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
    <Footer /> 
    </div>
  );
}

export default Scan;