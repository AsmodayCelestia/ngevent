"use client"
import Link from 'next/link'
import LogoutAction from "@/action/auth"
export default function navbar(){
    return(
        <>
            <div className="navbar bg-white text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">        
                        <img src="./image/logo.jpeg" alt="Logo" className="w-12 h-12" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/" >Home</Link>
                    </li>
                    <li>
                        <Link href="/login" >Login</Link>
                    </li>
                    <li>
                        <Link href="/register" >Register</Link>
                    </li>
                    <li>
                        <Link href="/wishlist" >Wishlist</Link>
                    </li>
                    <li>
                        <Link href="/products" >Product</Link>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={()=>{LogoutAction()}} className='btn text-red-500'>
                        Logout
                    </button>
                    {/* <a className="btn">Logout</a> */}
                </div>
            </div>
        </>
    )
}