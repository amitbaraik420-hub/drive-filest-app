import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Explor from "./explor/page";

export default function Layout({Children}) {
  return (
    <div>
     <Navbar></Navbar>
      <Explor></Explor>
      {Children}

      <Footer></Footer>
    </div>
  )
}