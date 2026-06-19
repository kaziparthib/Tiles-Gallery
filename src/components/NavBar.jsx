
"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import tg from "../../public/tg.png"

const NavBar = () => {
  return (
    <div className="border-b px-2">
      <nav className="flex flex-wrap justify-between items-center py-3 max-w-7xl mx-auto w-full gap-y-4">
       
        <Link href={"/"} className="order-1">
          <div className="flex gap-2 items-center">
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
          <li className="hover:border-b border-gray-700">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:border-b border-gray-700">
            <Link href={"/all-tiles"}>All Tiles</Link>
          </li>
          <li className="hover:border-b border-gray-700">
            <Link href={"/my-profile"}>My Profile</Link>
          </li>
        </ul>

        
        <div className="flex order-2 md:order-3">
          <ul className="flex items-center gap-2 sm:gap-4 text-sm">
            <li>
              <Link href={"/signup"}> 
                <Button variant="tertiary">
                  SignUp
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/signin"}> 
                <Button variant="outline">
                  SignIn
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;