import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import Scan from "./Scan";

export default function Home() {
  return (
    <div>
      <Head>
        <title>QR Code Scanner Online </title>
        <meta name="description" content="Scan QR codes quickly and easily with our QR code scanner online. Our user-friendly scanner is compatible with all devices and can be used for various purposes. Try it now for free." />
        <meta name="keywords" content="QRcode,Qr code scanner online,bar code scanner online,barcode scanner,qrcode scanner,qrcode scanner mobile"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Scan />
      </main>
    </div>
  );
}
