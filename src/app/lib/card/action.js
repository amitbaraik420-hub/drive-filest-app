 'use server';
import { revalidatePath } from "next/cache";

export const addProducts = async(formdata) => {
   
 const newProduct = Object.fromEntries(formdata.entries());
 const modifildData = {
 "title": newProduct.title,
  "type": newProduct.type,
  "status": newProduct.status,
  "pricePerDay": newProduct.pricePerDay,
  "image": newProduct.image,
  "description": newProduct.description,
};
 
const res = await fetch("http://localhost:8000/feltest", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(modifildData)
});
const data = await res.json()
 if(!res.ok){
    return;
 }
 revalidatePath("/adding")
 return data;
 };





 export const deleteProduct = async (id) => {
  try {
    // console.log("comes action file", id);
    
    const res = await fetch(`http://localhost:8000/feltest/${id}`, {
      method: 'DELETE',
    });
    
    
    const data = await res.json();
    // console.log("find data esily", data);
    
    
    if (!res.ok) {
      return { success: false, error: "server request is not sucessfully" };
    }
    
   
    revalidatePath("/explor"); 
    
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return { success: false, error: error.message };
  }
};




export const updataProduct = async (id, formData) => {
  const newProduct = Object.fromEntries(formData.entries());
  
  const modifildData = {
    title: newProduct.title,
    type: newProduct.type,
    status: newProduct.status,
    pricePerDay: newProduct.pricePerDay,
    image: newProduct.image,
    description: newProduct.description,
    location: newProduct.location,
    totalSeats: newProduct.totalSeats
  };

 
  const res = await fetch(`http://localhost:8000/feltest/${id}`, {
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifildData),
  });

  const data = await res.json();
  
  revalidatePath("/adding");
  return data;
};
