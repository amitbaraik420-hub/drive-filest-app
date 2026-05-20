
export const getAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:8000/feltest", { cache: 'no-store' });
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return [];
  }
};


export const getProductById = async (id) => {
  try {
    const allProducts = await getAllProducts();
    
    const singleProduct = allProducts.find((item) => item._id === id);
    return singleProduct || null;
  } catch (error) {
    console.error("Error in getProductById:", error);
    return null;
  }
};