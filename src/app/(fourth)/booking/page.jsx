import { getAllProducts } from "@/app/lib/card/data";
import Link from "next/link";

export default async function MyBookingsPage() {
  
  const cars = await getAllProducts();

 
  const totalCars = cars.length;
  const availableCars = cars.filter(car => car.status?.toLowerCase() === 'available').length;
  const bookedCars = cars.filter(car => car.status?.toLowerCase() === 'unavailable').length;

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-gray-50">
      

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Bookings Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Manage and track your premium fleet real-time.</p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Fleet</p>
          <p className="text-3xl font-black text-gray-800 mt-2">{totalCars} Cars</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-green-500 transition-transform hover:scale-[1.02]">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Available Now</p>
          <p className="text-3xl font-black text-green-600 mt-2">{availableCars} Active</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-amber-500 transition-transform hover:scale-[1.02]">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Booked / Rent Out</p>
          <p className="text-3xl font-black text-amber-600 mt-2">{bookedCars} Rented</p>
        </div>
      </div>

     
      {cars.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm border">
          <p className="text-gray-500 text-lg mb-4">No cars available in the garage!</p>
          <Link href="/explor-card">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-all">
              Explore Fleet
            </button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200/80">
          <table className="min-w-full table-auto">
           
            <thead className="bg-[#1e293b] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-sm">Car Details</th>
                <th className="px-6 py-4 text-left font-semibold text-sm">Location</th>
                <th className="px-6 py-4 text-left font-semibold text-sm">Seats</th>
                <th className="px-6 py-4 text-left font-semibold text-sm">Price / Day</th>
                <th className="px-6 py-4 text-left font-semibold text-sm">Status</th>
                <th className="px-6 py-4 text-center font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-100">
              {cars.map((item) => {
                const isAvailable = item.status?.toLowerCase() === 'available';

                return (
                  <tr key={item._id} className="hover:bg-gray-50/80 transition-colors text-gray-700">
                    
                 
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-14 h-10 object-cover rounded-lg shadow-sm border border-gray-100"
                          />
                        )}
                        <div>
                          <div className="font-bold text-gray-900">{item.title || "Unknown Car"}</div>
                          <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-mono px-2 py-0.5 rounded mt-0.5 uppercase">
                            {item.type || "Standard"}
                          </span>
                        </div>
                      </div>
                    </td>
                    
                   
                    <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                      {item.location || "Dhaka"}
                    </td>
                    
                   
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.seats ? `${item.seats} Seater` : "5 Seater"}
                    </td>
                    
                  
                    <td className="px-6 py-4 font-bold text-gray-900 text-sm">
                      ${item.pricePerDay || item.price || "0"}
                    </td>
                    
                   
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 inline-flex text-[11px] leading-5 font-extrabold rounded-full uppercase tracking-wider
                        ${isAvailable 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-amber-100 text-amber-800 border border-amber-200'}`}>
                        {item.status || "UNAVAILABLE"}
                      </span>
                    </td>

                    
                    <td className="px-6 py-4 text-center">
                      {isAvailable ? (
                        <Link href={`/card/${item._id || item.id}`}>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow">
                            Instant Book
                          </button>
                        </Link>
                      ) : (
                        <button 
                          disabled 
                          className="bg-gray-100 text-gray-400 text-xs font-semibold px-4 py-2 rounded-lg cursor-not-allowed border border-gray-200"
                        >
                          Sold Out
                        </button>
                      )}
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}