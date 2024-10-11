import Link from "next/link";
import React from "react";
export default function Page(){
    return(
        <nav className="flex justify-center item-center bg-black border-2 border-yellow-300 p-1 ">
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/about">About</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/contact">Contact</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/country">Country</Link>
        </nav>
        
    );
}