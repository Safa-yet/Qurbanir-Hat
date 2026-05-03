
import "./globals.css";
import Navbar from "@/Component/Shared Item/Navbar";
import Footer from "@/Component/Shared Item/Footer";
import { ToastContainer } from "react-toastify";


import { poppins } from "./fonts";


export const metadata = {
  title: "QurbanirHat",
  description: "A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <ToastContainer></ToastContainer>
        </body>

    </html>
  );
}
