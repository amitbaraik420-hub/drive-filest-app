export const dynamic = "force-dynamic";
import { getAllProducts } from "@/app/lib/card/data";
import { DeleteModal } from "@/components/DeleteModel";
import Link from "next/link";



export default async function Page() {
  const data = await getAllProducts();
  // console.log(data);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        
        {data && data.map((item) => (
          <div key={item._id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 relative max-w-sm w-full mx-auto">
            
          
            <span className="absolute top-4 left-4 bg-yellow-400 text-slate-900 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider z-10">
              Available
            </span>

          
            <div className="h-48 overflow-hidden bg-gray-100">
              <img 
                src={item?.image || "https://via.placeholder.com/400x250"} 
                alt={item?.name || "Car Image"} 
                className="w-full h-full object-cover"
              />
            </div>

           
            <div className="p-5">
              
             
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                    {item?.status || "SUV"}
                  </p>
                  <h3 className="text-xl font-extrabold text-slate-800 mt-0.5">
                    {item?.title || "Hyundai Tucson"}
                  </h3>
                </div>
                
          
                <div className="bg-slate-900 text-white rounded-xl px-3 py-1.5 text-center min-w-[65px]">
                  <span className="text-sm font-bold">${item?.pricePerDay || "110"}</span>
                  <p className="text-[9px] text-gray-400 leading-none">per day</p>
                </div>
              </div>

          
              <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                {item?.description || "A spacious vehicle with excellent luggage room and smooth highway manners."}
              </p>

            
              <div className="space-y-2 text-xs sm:text-sm text-gray-600 mb-5 border-t border-gray-50 pt-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">📍</span>
                  <span className="font-medium text-slate-700">{item?.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">👥</span>
                  <span className="font-medium text-slate-700">{item?.seats} seats</span>
                </div>
              </div>

             <Link href={`/card/${item._id}`} className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-4 rounded-xl transition duration-200 text-center text-sm shadow-sm active:scale-[0.98]">
                     View Details
             </Link>
          
              
            
              
            </div>
               <div className="flex justify-between items-center p-3">
                 <div>
                  <Link href={`/card/${item._id}/edit`} className="btn btn-active">Edit</Link>
                 
                  </div>
                  <DeleteModal productId={item._id}></DeleteModal>
              </div>
          </div>
        ))}

      </div>
      
    </div>
  );
}