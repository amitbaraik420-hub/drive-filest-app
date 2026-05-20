import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // npm i react-icons ইন্সটল করা থাকলে

const Footer = () => {
    return (
        <footer className="bg-[#0F1014] text-gray-400 border-t border-gray-900 rounded-t-3xl mt-12">
            <div className="container mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                
                
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                 
                        <div className="w-10 h-10 bg-[#A3E635] rounded-xl flex items-center justify-center font-black text-black text-xl shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                            D
                        </div>
                        <div>
                            <span className="text-white font-black text-xl tracking-wide block leading-none">DriveFleet</span>
                            <span className="text-[#A3E635] text-xs font-bold tracking-widest uppercase">Rental Club</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 max-w-sm">
                        Dhaka's premier luxury mobility platform. Rent sharper cars for cleaner getaways or list your private vehicle.
                    </p>
                </div>

           
                <div>
                    <h3 className="text-white font-bold mb-4 tracking-wide text-sm uppercase">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/" className="hover:text-[#A3E635] transition-colors duration-200">Home</Link>
                        </li>
                        <li>
                            <Link href="/exploring" className="hover:text-[#A3E635] transition-colors duration-200">Explore Cars</Link>
                        </li>
                        <li>
                            <Link href="/add-car" className="hover:text-[#A3E635] transition-colors duration-200">Add Car</Link>
                        </li>
                        <li>
                            <Link href="/bookings" className="hover:text-[#A3E635] transition-colors duration-200">My Bookings</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-4 tracking-wide text-sm uppercase">Support & Privacy</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/terms" className="hover:text-[#A3E635] transition-colors duration-200">Terms & Conditions</Link></li>
                        <li><Link href="/privacy" className="hover:text-[#A3E635] transition-colors duration-200">Privacy Policy</Link></li>
                        <li><Link href="/faq" className="hover:text-[#A3E635] transition-colors duration-200">FAQs</Link></li>
                        <li><Link href="/contact" className="hover:text-[#A3E635] transition-colors duration-200">Contact Us</Link></li>
                    </ul>
                </div>

           
                <div>
                    <h3 className="text-white font-bold mb-4 tracking-wide text-sm uppercase">Follow Our Journey</h3>
                    <p className="text-xs text-gray-500 mb-4">Stay updated with our latest luxury fleet additions.</p>
                    <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 bg-[#16171C] hover:bg-[#A3E635] hover:text-black rounded-full flex items-center justify-center text-white transition-all duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#16171C] hover:bg-[#A3E635] hover:text-black rounded-full flex items-center justify-center text-white transition-all duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#16171C] hover:bg-[#A3E635] hover:text-black rounded-full flex items-center justify-center text-white transition-all duration-300">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#16171C] hover:bg-[#A3E635] hover:text-black rounded-full flex items-center justify-center text-white transition-all duration-300">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>

            {/* নিচের কপিরাইট অংশ */}
            <div className="border-t border-gray-900 bg-[#0A0B0E] py-6 rounded-t-2xl">
                <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} DriveFleet Rental Club. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built for <span className="text-white font-semibold">Premium Mobility</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;