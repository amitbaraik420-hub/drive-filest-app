"use client";
import { Check } from "@gravity-ui/icons";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Data = Object.fromEntries(formData.entries());
    
    const { error, data } = await authClient.signUp.email({
      name: Data.name,       
      email: Data.email,
      password: Data.password,
      image: Data.image,    
      callbackURL: ("/")
    });

    if (!error) {
      router.push('/'); 
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6 border border-base-300">
        <h2 className="text-2xl font-bold text-center mb-6 text-base-content">Sign Up</h2>
        
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          
        
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Username</span>
            </label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              className="input input-bordered w-full" 
              required 
            />
          </div>

   
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Image URL</span>
            </label>
            <input 
              type="url" 
              name="image"
              placeholder="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500" 
              className="input input-bordered w-full" 
            />
          </div>

    
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input 
              type="email" 
              name="email"
              placeholder="john@example.com" 
              className="input input-bordered w-full" 
              required 
            />
          </div>

     
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input 
              type="password" 
              name="password"
              placeholder="Enter your password" 
              className="input input-bordered w-full" 
              required 
            />
            <label className="label">
              <span className="label-text-alt text-gray-500">
                Must be at least 8 characters with 1 uppercase and 1 number
              </span>
            </label>
          </div>

         
          <div className="flex gap-2 mt-4">
            <button type="submit" className="btn btn-primary flex-1 gap-1">
              <Check className="w-4 h-4" /> Submit
            </button>
            <button type="reset" className="btn btn-outline flex-1">
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}