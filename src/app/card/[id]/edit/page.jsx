export const dynamic = "force-dynamic";
import EditeCard from "@/app/editproducts/page";
import { getProductById } from "@/app/lib/card/data"; 

export default async function Edit({ params }) {
    const resolvedParams = await params; 
    const id = resolvedParams.id; 

   
    const product = await getProductById(id); 

    
    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-2">
                <h2 className="text-xl font-bold text-red-500">Can not get project data</h2>
                <p className="text-gray-500">Please check if your backend server is running on port 8000</p>
            </div>
        );
    }

    
    return (
        <div>
            <EditeCard data={product} />
        </div>
    );
}