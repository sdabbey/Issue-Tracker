'use client'
import Link from 'next/link'
import React from 'react'
import { IoBugOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Navbar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]
    const currentPath = usePathname();
  return (
    <nav className='space-x-6 border-b mb-5 px-5 h-14 mx-2 items-center flex'>
        <Link className='text-white' href='/'><IoBugOutline /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => <Link key={link.href} className={classNames({
                'text-zinc-400': link.href === currentPath,
                'text-zinc-600': link.href !== currentPath,
                'hover:text-zinc-400 transition-colors': true
            })} href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar