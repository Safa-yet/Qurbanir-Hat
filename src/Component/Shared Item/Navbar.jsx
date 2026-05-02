"use client";
import { useState } from "react";
import { Avatar, Button, Spinner } from "@heroui/react";
import logoImg from "../../image/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const userProfile = session?.user;

  console.log(session);

  const pathName = usePathname();
  const Links = (
    <>
      <Link
        href="/"
        className={`${pathName === "/" ? "text-green-600 font-bold" : "text-gray-600"}`}
      >
        Home
      </Link>
      <Link
        href="/animal"
        className={`${pathName === "/animal" ? "text-green-600 font-bold" : "text-gray-600"}`}
      >
        All Animals
      </Link>
      <Link
        href="/contact"
        className={`${pathName === "/contact" ? "text-green-600 font-bold" : "text-gray-600"}`}
      >
        Contact
      </Link>
    </>
  );
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
            <Image
              src={logoImg}
              alt="logo"
              sizes="lg"
              width={300}
              height={100}
            ></Image>
            {/* <h1 className="text-xl font-bold text-green-500">QurbanirHatt</h1> */}
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{Links}</ul>
        {isPending ? (
          <div className="flex flex-col items-center gap-2">
            <Spinner color="success" />
          </div>
        ) : (
          <div className="hidden items-center gap-4 md:flex">
            {session ? (
              <>
                <h1>
                  Hello,{" "}
                  <span className="text-lg uppercase">{userProfile.name}</span>
                </h1>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <Image
                        alt="User Avatar"
                        src={userProfile.image}
                        refferpolicy='no-reffer'
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link className="justify-between" href='/profile'>
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <a onClick={()=>authClient.signOut()}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/signin">
                  <Button className="w-full rounded-lg " variant="outline">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="w-full bg-green-600 rounded-lg">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {Links}
           {isPending ? (
          <div className="flex flex-col items-center gap-2">
            <Spinner color="success" />
          </div>
        ) : (
        
          <>
          {session ? (
            <>
              <h1>
                Hello,{" "}
                <span className="text-lg uppercase">{userProfile.name}</span>
              </h1>

              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <Image
                      alt="User Avatar"
                      src={userProfile.image}
                      refferpolicy='no-reffer'
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link className="justify-between" href='/profile'>
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a onClick={()=>authClient.signOut()}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
            <Link href="/auth/signin" className="block py-2 w-full">
              Login
            </Link>
            <Link href="/auth/signup" className="block py-2 w-full">
            <Button className="w-full">Sign Up</Button>
            </Link>

          </li>
            </>
          )}
          </>
       
      )}
        
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
