import { getProductById } from "@/app/lib/card/data"; // পাথ ঠিক করা হয়েছে

export default async function CardDetels({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Car not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
        
        
        <div className="rounded-2xl overflow-hidden bg-gray-100 h-64 md:h-full">
          <img 
            src={product?.image || "https://via.placeholder.com/600x400"} 
            alt={product?.name} 
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="flex flex-col justify-between">
          <div>
            <span className="bg-yellow-400 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Available
            </span>
            <p className="text-xs uppercase text-gray-400 font-bold tracking-widest mt-4">{product?.status || "SUV"}</p>
            <h1 className="text-3xl font-extrabold text-slate-900 mt-1">{product?.title || "Hyundai Tucson"}</h1>
            
            <div className="mt-4 inline-flex items-baseline gap-1 bg-slate-900 text-white px-4 py-2 rounded-xl">
              <span className="text-2xl font-bold">${product?.pricePerDay}</span>
              <span className="text-xs text-gray-400">/ per day</span>
            </div>

            <p className="text-gray-600 text-sm mt-6 leading-relaxed">
              {product?.description || "A spacious vehicle with excellent luggage room and smooth highway manners."}
            </p>

            <div className="mt-6 space-y-3 border-t border-gray-100 pt-4 text-sm text-gray-700">
              <div className="flex items-center gap-2"><span>📍 Location:</span> <span className="font-semibold">{product?.location || "Uttara, Dhaka"}</span></div>
              <div className="flex items-center gap-2"><span>👥 Capacity:</span> <span className="font-semibold">{product?.seats} seats</span></div>
            </div>
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold py-4 px-6 rounded-2xl transition duration-200 shadow-md mt-8">
            Book This Car Now
          </button>
        </div>

      </div>
    </div>
  );
}