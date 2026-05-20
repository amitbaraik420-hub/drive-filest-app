import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Booking from "./booking/page";

export default function Layout({Children}) {
  return (
    <div>
     <Navbar></Navbar>
      <Booking></Booking>
      {Children}
      
      <Footer></Footer>
    </div>
  )
}