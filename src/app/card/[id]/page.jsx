"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingButton({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const pricePerDay = product?.pricePerDay || 300;
  const totalPrice = pricePerDay * days;
  const tax = Math.round(totalPrice * 0.05); 
  const finalAmount = totalPrice + tax;

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    
   
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
   
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg text-center"
      >
        Book This Car Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100 p-6 relative">
            
            {!isSuccess ? (
              <>
               
                <h3 className="text-xl font-black text-gray-900 mb-2">Booking Summary</h3>
                <p className="text-xs text-gray-400 border-b pb-3 uppercase tracking-wider">Premium Rental Invoice</p>

               
                <div className="flex gap-4 my-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <img src={product?.image} className="w-20 h-14 object-cover rounded-lg" alt="" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{product?.title}</h4>
                    <p className="text-xs text-amber-600 font-semibold">${pricePerDay} / day</p>
                  </div>
                </div>

             
                <div className="mb-5">
                  <label className="text-xs font-bold text-gray-500 uppercase">Select Rental Duration (Days)</label>
                  <div className="flex items-center gap-3 mt-1.5">
                    <button 
                      disabled={days <= 1}
                      onClick={() => setDays(days - 1)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-gray-800 rounded-lg font-bold text-lg transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-black text-gray-800 text-lg">{days}</span>
                    <button 
                      onClick={() => setDays(days + 1)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-bold text-lg transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

           
                <div className="space-y-2.5 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 font-medium text-gray-600">
                  <div className="flex justify-between">
                    <span>Base Rent ({days} days):</span>
                    <span className="font-bold text-gray-900">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Govt Tax / VAT (5%):</span>
                    <span>${tax}</span>
                  </div>
                  <div className="h-[1px] bg-gray-200 my-2"></div>
                  <div className="flex justify-between text-base font-black text-gray-900">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">${finalAmount}</span>
                  </div>
                </div>

                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-xl transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleConfirmBooking}
                    disabled={isSubmitting}
                    className="py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all text-sm shadow-md shadow-blue-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Processing..." : "Confirm Rent"}
                  </button>
                </div>
              </>
            ) : (
              
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl mb-4 animate-bounce">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-1">Booking Confirmed!</h3>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">Your premium ride is reserved. You can track this anytime in your dashboard.</p>
                
                <div className="mt-6 space-y-3">
                  <Link href="/booking">
                    <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                      Go to My Bookings
                    </button>
                  </Link>
                  <button 
                    onClick={() => { setIsOpen(false); setIsSuccess(false); }}
                    className="text-xs text-gray-400 hover:text-gray-600 underline block mx-auto font-medium"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}