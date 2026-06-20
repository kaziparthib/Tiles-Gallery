"use client";

import ProfileModal from "@/components/ProfileModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300">


        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6">
          {user?.image && (
            <Image
              src={user.image}
              alt="user picture"
              fill
              className="rounded-full object-cover border-4 border-indigo-50 shadow-sm"
              priority
            />
          )}

        </div>


        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {user?.name}
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-8">
          {user?.email}
        </p>


        <ProfileModal></ProfileModal>

      </div>
    </div>
  );
};

export default MyProfilePage;