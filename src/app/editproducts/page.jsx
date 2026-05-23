// "use client";
// import { useRouter } from 'next/navigation';
// import { updataProduct } from '../lib/card/action';

// export default function EditeCard({ data }) { 
//   const router = useRouter();

// const handelSubmit = async (formData) => {
//     const res = await updataProduct(data._id, formData);
    
//     if (res && res.success) {
        
//         router.refresh(); 
        
//         router.push('/adding');
//     } else {
//         alert("গণ্ডগোল হয়েছে! আপডেট করা যায়নি।");
//     }
// };
  

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6">
        
//         <form action={handelSubmit} className="space-y-4">
//            <h1 className='text-center text-purple-400 text-4xl font-bold'>Editing Card File</h1>
          
//           <div>
            
//             <label className="block text-gray-700 font-semibold text-sm mb-1">Car Title</label>
//             <input
//               type="text"
//               name="title"
//               defaultValue={data.title}
//               placeholder="e.g. Mitsubishi Pajero Sport"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               required
//             />
//           </div>

        
//           <div>
//             <label className="block text-gray-700 font-semibold text-sm mb-1">Car Type</label>
//             <input
//               type="text"
//               name="type"
//               defaultValue={data.type}
//               placeholder="e.g. SUV, Sedan, Microbus"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               required
//             />
//           </div>

       
//           <div>
//             <label className="block text-gray-700 font-semibold text-sm mb-1">Price Per Day</label>
//             <input
//               type="number"
//               name="pricePerDay"
//               defaultValue={data.pricePerDay}
//               placeholder="Enter Price per day"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               required
//             />
//           </div>

         
//           <div>
//             <label className="block text-gray-700 font-semibold text-sm mb-1">Car Image URL</label>
//             <input
//               type="text"
//               name="image"
//               defaultValue={data.image}
//               placeholder="Enter Image URL"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               required
//             />
//           </div>

        
//           <div>
//             <label className="block text-gray-700 font-semibold text-sm mb-1">Location</label>
//             <input
//               type="text"
//               name="location"
//               defaultValue={data.location}
//               placeholder="e.g. Mirpur, Dhaka"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               required
//             />
//           </div>

         
//           <div>
//             <label className="block text-gray-700 font-semibold text-sm mb-1">Total Seats</label>
//             <input
//               type="number"
//               name="seats"
//               defaultValue={data.seats}
//               placeholder="e.g. 7"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               required
//             />
//           </div>

      
//           <div>
//             <label className="block text-gray-700 font-semibold text-sm mb-1">Status</label>
//             <select
//               name="status"
//               defaultValue={data.status}
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white"
//               required
//             >
//               <option value="AVAILABLE">AVAILABLE</option>
//               <option value="UNAVAILABLE">UNAVAILABLE</option>
//             </select>
//           </div>

        
//           <div>
//             <label className="block text-gray-700 font-semibold text-sm mb-1">Car Description</label>
//             <textarea
//               name="description"
//               defaultValue={data.description}
//               placeholder="Enter Car Description"
//               rows="3"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
//               required
//             ></textarea>
//           </div>

          
//           <div className="flex items-center gap-3 pt-2">
//             <button
//               type="submit"
//               className="px-5 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition"
//             >
//               Update car
//             </button>
//             <button
//               type="reset"
//               className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition"
//             >
//               Reset
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }
import React from 'react'

export default function EditProdutPage() {
  return (
    <div>
      <h1>amae suner bangla</h1>
    </div>
  )
}
