"use client";
import { Check } from "@gravity-ui/icons";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function SignUp() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

   
    const { error, data: sessionData } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackUrl: "/", 
    });

    if (!error) {
      router.push('/');
    } else {
      
      console.error("Login failed:", error);
    }
  };
   
  const handelClickGoogle = async() =>{
    await authClient.signIn.social({
      provider:"google"
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6 border border-base-300">
        <h2 className="text-2xl font-bold text-center mb-6 text-base-content">Sign In</h2>
        
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        
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
                Must be at least 8 characters
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
          <div className="flex justify-center items-center p-2">
            <h1>or</h1>
          </div>
          <button type="button" onClick={handelClickGoogle} className="btn btn-accent"><FaGoogle />Signin with Google</button>
        </form>
      </div>
    </div>
  );
}