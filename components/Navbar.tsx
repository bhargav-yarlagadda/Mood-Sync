'use client'

import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="w-full fixed z-10 px-6 py-3 flex items-center justify-center">
      <div className="w-full max-w-6xl px-6 py-3 flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg rounded-xl">
        <Link href={'/'} className="text-white text-2xl font-bold tracking-wide cursor-pointer hover:scale-105 transition-transform">
          Mood Sync
        </Link>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link
            href="/sign-in"
            className="px-4 py-2 text-white font-semibold  rounded-lg transition duration-300 hover:bg-white/30"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
