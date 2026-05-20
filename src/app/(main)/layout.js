import Navbar from "../navbar/page";
import Banner from "../banner/page";
import Footer from "../footer/page";
import Page from "./page";

export default function Layout({Children}) {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>
      <Page></Page>
      {Children}
      <Footer></Footer>
    </div>
  )
}
