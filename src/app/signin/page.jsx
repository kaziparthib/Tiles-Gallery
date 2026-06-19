"use client";
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { authClient } from "@/lib/auth-client";
const SignInPage = () => {
 const onSubmitSignIn = async (e) => {
     e.preventDefault();
 
const formData=new FormData(e.currentTarget)
const userdata=Object.fromEntries(formData.entries())
     const {data,error}=await authClient.signIn.email({
       
       email:userdata.email,
       password:userdata.password,
       rememberMe:true,
       callbackURL:'/'
     })
     if(error){
       alert('failed')
     }
     if(data){
       alert('success')
     }
     
   }
   const googlesignin=async()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
   }
  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Login Card Container */}
      <div className="w-full max-w-md p-6 sm:p-8 space-y-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        
        {/* Title */}
        <div className="text-center text-gray-900">
          <h2 className="text-3xl font-black">Login</h2>
          <p className="mt-2 text-sm text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={onSubmitSignIn}>
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

        
          <Button type="submit" variant="solid" className="w-full bg-black text-white hover:bg-gray-800">
            Log In
          </Button>
        </form>

      
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

       
        <button
        onClick={()=>googlesignin()}
          type="button"
          className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
        >
          Log in with Google
        </button>

    
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href={"/signup"} className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-all">
              Register here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignInPage;