import Navbar from "../navbar/page";
import Footer from "../footer/page";
import AddPage from "./adding/page";
export default function Layout({Children}) {
  return (
    <div>
     <Navbar></Navbar>
     <AddPage></AddPage>
      {Children}

      <Footer></Footer>
    </div>
  )
}