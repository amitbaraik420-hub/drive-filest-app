import EditeCard from "@/app/editproducts/page"; 
import { getProductById } from "@/app/lib/card/data";

export default async function Edit({ params }) {
 
  const resolvedParams = await params;
  const id = resolvedParams.id;

 
  const product = await getProductById(id);

 
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-2">
        <h2 className="text-xl font-bold text-red-500">Can not get projects</h2>
        <p className="text-gray-500">Do not match (`{id}`) id server</p>
      </div>
    );
  }

  
  return (
    <div>
      <EditeCard data={product} />
    </div>
  );
}