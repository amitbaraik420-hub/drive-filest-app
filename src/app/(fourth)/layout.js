import Navbar from "../navbar/page";
import Footer from "../footer/page";
import MyBookingsPage from "./booking/page";

export default function Layout({Children}) {
  return (
    <div>
     <Navbar></Navbar>
      <MyBookingsPage></MyBookingsPage>
      {Children}
      
      <Footer></Footer>
    </div>
  )
}