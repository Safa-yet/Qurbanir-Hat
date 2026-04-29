'use client'
import { useState } from "react";
import {  Button } from "@heroui/react";
import logoImg from '../../image/logo.png'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {

    const pathName = usePathname();
const Links = <>
<Link href='/' className={`${pathName === '/' ? 'text-green-600 font-bold' : "text-gray-600"}`}>Home</Link>
<Link href='/animal'  className={`${pathName === '/animal' ? 'text-green-600 font-bold' : "text-gray-600"}`}>All Animal</Link>
<Link href='/contact'  className={`${pathName === '/contact' ? 'text-green-600 font-bold' : "text-gray-600"}`}>Contact</Link>
</>
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
             <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex   items-center justify-between container">
        <div className="flex items-center gap-4 justify-between  w-full md:w-fit">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="w-30  flex items-center justify-center">
          
            <Image src={logoImg} alt="logo" sizes="lg" width={300} height={100} ></Image>
            {/* <h1 className="text-xl font-bold text-green-500">QurbanirHatt</h1> */}
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
        {Links}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
         <Link href='/signup'>
              <Button className="w-full rounded-lg " variant="outline">Sign Up</Button>
              </Link>
         <Link href='/signup'>
              <Button className="w-full bg-green-600 rounded-lg" >Sign Up</Button>
              </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {Links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="#" className="block py-2">
                Login
              </Link>
              <Link href='/signup'>
              <Button className="w-full bg-green-600">Sign Up</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    );
};

export default Navbar;