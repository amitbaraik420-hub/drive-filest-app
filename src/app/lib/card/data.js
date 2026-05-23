
export const getAllProducts = async () => {
  try {
    const res = await fetch("https://drive-filest-app-io6a.vercel.app/feltest", { cache: 'no-store' });
    
    if (!res.ok) {
      console.error(`Express server returned status: ${res.status}`);
      return [];
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
   
    const res = await fetch(`https://drive-filest-app-io6a.vercel.app/feltest/${id}`, {
      cache: 'no-store' 
    });
    
   
    if (!res.ok) {
       console.error(`NOT GET DATA: STATUS ${res.status}`);
       return null;
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const getMyBookings = async (email) => {
  try {
   
    const res = await fetch(`https://drive-filest-app-io6a.vercel.app/feltest?email=${email}`, {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};