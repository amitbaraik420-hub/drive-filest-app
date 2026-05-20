import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi'; 

const Banner = () => {
    return (
   
        <section className="relative w-full min-h-[600px] bg-[#0F1014] text-white overflow-hidden rounded-3xl my-6">
            <div className="container mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
           
                <div className="z-10">
                    <span className="text-[#A3E635] font-bold tracking-widest text-sm mb-4 block uppercase">
                        Luxury Mobility On Demand
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                        Rent <span className="text-white">sharper</span> cars <br />
                        for <span className="text-gray-400">cleaner</span> <br />
                        getaways.
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        Discover curated cars across Dhaka, book instantly, or list your own vehicle with a private owner dashboard.
                    </p>
                    
                    <Link href="/exploring">
                        <button className="bg-[#A3E635] hover:bg-[#bef264] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all duration-300">
                            Explore Cars <HiArrowRight className="text-xl" />
                        </button>
                    </Link>
                </div>

         
                <div className="relative">
                   
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#A3E635] opacity-10 blur-[100px] rounded-full"></div>
           
                    <div className="relative z-10 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl bg-[#16171C]">
                       
                        <img 
                            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80" 
                            alt="Premium Car"
                            className="w-full h-auto object-cover opacity-90 rounded-2xl"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1014] via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

        
            <div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
                <div className="grid grid-cols-5 gap-2">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;