
export const getAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:8000/feltest", { cache: 'no-store' });
    
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
    const allProducts = await getAllProducts();
    
    if (!allProducts || allProducts.length === 0) {
      console.log("No products received from server.");
      return null;
    }

   
    const singleProduct = allProducts.find((item) => {
      const itemId = item._id ? item._id.toString() : '';
      const compareId = id ? id.toString() : '';
      return itemId === compareId;
    });
    
    return singleProduct || null;
  } catch (error) {
    console.error("Error in getProductById:", error);
    return null;
  }
};

export const getMyBookings = async (email) => {
  try {
   
    const res = await fetch(`http://localhost:8000/feltest?email=${email}`, {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};