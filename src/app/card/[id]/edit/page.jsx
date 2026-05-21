import EditeCard from "@/app/editproducts/page";
import { getProductById } from "@/app/lib/card/data";

export default async function Edit({ params }) {
  const { id } = await params;
 
  const product = await getProductById(id); 

  return (
    <div>
     
      <EditeCard data={product} />
    </div>
  );
}