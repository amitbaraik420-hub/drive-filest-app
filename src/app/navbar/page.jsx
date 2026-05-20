"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
    const Links = (
        <div className="flex gap-3">
          <Link href="/" className={`${pathname === "/" ? "text-green-400":""}`}>Home</Link>
          <Link href="/explor" className={`${pathname === "/explor" ? "text-green-400":""}`}>Explor Card</Link>
          <Link href="/adding" className={`${pathname === "/adding" ? "text-green-400":""}`}>Add Car</Link>
          <Link href="/booking" className={`${pathname === "/booking" ? "text-green-400":""}`}>My bocking page</Link>

        </div>
    )
  return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {Links}
      </ul>
    </div>
      <img src="rrrr.jpeg" alt="fledest" className="w-60 h-16 rounded-2xl"/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
    <Link className="btn" href="/signin">LogIn</Link>
    <Link className="btn" href="/signUp">SignUp</Link>
  
  
  </div>
</div>
  )
}
