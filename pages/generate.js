import React, { useState } from "react";
import QRCode from "qrcode.react";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import styles from "../styles/Generate.module.css";
import Footer from "../components/Footer";
import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";

function Generate() {
  const [qrValue, setQrValue] = useState("qrcode_image");
  const handleOnChange = (event) => {
    const { value } = event.target;
    setQrValue(value);
  };
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="App">
     <Head>
        <title>QR Code Generator Online</title>
        <meta name="description" content="Generate QR codes with ease using our online QR code generator. Our user-friendly tool allows you to create custom QR codes for various purposes and is compatible with all devices. Try it now for free." />
        <meta name="keywords" content="QRcode,Qr code generator online,bar code generator online,barcode generator,qrcode generator,qrcode generator mobile"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavbar />
      <Navbar />
      <HamburgerMenu />
      <div className={styles.generate}>
        <h1>Generate Your QR Code Online</h1>
        <br />
        <p>Easily create QR codes for all your needs with our online QR code generator.</p>
        <br />
        <input
          onChange={handleOnChange}
          placeholder="Enter Your Text, URL, Anything"
        />
        <br />
        <QRCode
          id="qr-gen"
          value={qrValue}
          size={290}
          level={"H"}
          includeMargin={true}
        />
        <p>
          <button type="button" onClick={downloadQRCode}>
            Download Your QR Code
          </button>
        </p>
        <br />
        <br />
        <br />
        <h3>QR Code Generator Online & Qr Code Generator uses </h3>
        <br />
        <p>
          QR codes, or Quick Response codes, are a type of barcode that can be
          scanned using a smartphone or QR code scanner to quickly access
          information or perform an action. QR codes have become increasingly
          popular in recent years, as they provide a convenient and efficient
          way for businesses and individuals to share and access information. In
          this article, we will discuss the various uses of QR codes and the
          benefits of using a QR code generator.
        </p>
        <br />
        <p>
          One of the most common uses of QR codes is in marketing and
          advertising. Businesses can use QR codes on billboards, posters, and
          even in print ads to give customers quick access to more information
          about their products or services. For example, a QR code on a poster
          for a new movie could take users to the movies trailer, while a QR
          code on a product packaging could take users to the products website.
          This allows businesses to provide customers with more information and
          a better shopping experience without taking up valuable space on the
          physical ad or packaging. QR codes can also be used to track the
          effectiveness of marketing campaigns. By using unique QR codes for
          each campaign, businesses can track how many people scanned the code
          and what actions they took, such as visiting the website or making a
          purchase. This can help businesses to measure the success of their
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
          patients with the information they need to manage their own health. QR
          codes are also being used in the transportation industry. Airlines,
          trains, and buses can use QR codes to provide passengers with
          information about their travel itineraries and to facilitate check-in.
          They can also use QR codes to create interactive maps and guides for
          passengers. This can help to make travel more convenient and enjoyable
          for passengers. To create these QR codes, businesses and individuals
          can use a QR code generator. A QR code generator is a tool that allows
          users to easily create their own QR codes. These generators can be
          found
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

export default Generate;
