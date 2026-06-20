
"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import tg from "../../public/tg.png"
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const { data: session,isPending } = authClient.useSession()
  const user = session?.user
 
  return (
    <div className="border-b px-2">
      <nav className="flex flex-wrap justify-between items-center py-3 max-w-7xl mx-auto w-full gap-y-4">

        <Link href={"/"} className="order-1">
          <div className="flex gap-2 items-center animate__animated hover: animate__bounce animate-slower">
            <Image
              src={tg}
              alt="Tiles Gallery"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
            <h3 className="font-black text-lg">Tiles Gallery</h3>
          </div>
        </Link>


        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm order-3 md:order-2 w-full md:w-auto">
          <li className="hover:border-b border-gray-700 font-semibold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:border-b border-gray-700 font-semibold">
            <Link href={"/all-tiles"}>All Tiles</Link>
          </li>
          <li className="hover:border-b border-gray-700 font-semibold">
            <Link href={"/my-profile"}>My Profile</Link>
          </li>
        </ul>


        <div className="flex order-2 md:order-3">
          <ul className="flex items-center gap-2 sm:gap-4 text-sm">
            {isPending?(
              "loading..."
            ): user ? (
              <>
              <li>
                <div className="rounded-full flex justify-center items-center overflow-hidden w-[30px] h-[30px]">
                  <img
                    src={user?.image || '/default-avatar.png'} // Fallback avatar path
                    alt="profile-pic"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </li>
              <li>
           
             <Button variant="tertiary" onClick={async()=>await authClient.signOut()}>
                LogOut
              </Button>
            </li>
              </>
            ) : (
              // If user is NOT logged in, show SignUp and SignIn buttons
              <>
                <li>
                  <Link href="/signup">
                    <Button variant="tertiary"> {/* Replace with your Tailwind button classes */}
                      SignUp
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/signin">
                    <Button variant="tertiary">

                      SignIn

                    </Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default NavBar;