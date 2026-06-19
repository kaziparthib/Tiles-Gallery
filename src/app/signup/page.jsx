"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";


const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
const formData=new FormData(e.currentTarget)
const userdata=Object.fromEntries(formData.entries())
    // const {data, error} = await authClient.signUp.email({
    //     name,
    //     email,
    //     password,
    //     image,
    // })
    const {data,error}=await authClient.signUp.email({
      name:userdata.name,
      email:userdata.email,
      password:userdata.password,
      image:userdata.photoUrl
    })
    if(error){
      alert('failed')
    }
    if(data){
      alert('success')
    }
    console.log({data,error});
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
     
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-2xl shadow-lg border border-gray-100">
        
        {/* Title */}
        <div className="text-center text-gray-900">
          <h2 className="text-3xl font-black">Register</h2>
          <p className="mt-2 text-sm text-gray-500">
            Create your account 
          </p>
        </div>

       
        <form className="space-y-4" onSubmit={onSubmit}>
       
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors outline-none"
              placeholder="John Doe"
            />
          </div>

        
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors outline-none"
              placeholder="you@example.com"
            />
          </div>

        
          <div>
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              id="photoUrl"
              name="photoUrl"
              type="url"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors outline-none"
              placeholder="https://example.com/your-photo.jpg"
            />
          </div>

         
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors outline-none"
              placeholder="••••••••"
            />
          </div>

       
          <div className="pt-2">
            <Button type="submit" variant="solid" className="w-full bg-black text-white hover:bg-gray-800">
              Register
            </Button>
          </div>
        </form>

      
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-all">
              Sign In here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;