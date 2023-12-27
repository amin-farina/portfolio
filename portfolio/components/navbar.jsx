'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import "../public/assets/css/navbar.css"


export function NavBar() {
    const pathname = usePathname();
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },

    ]

    return (
        <div className="w-[100vw] mx-auto container pt-5">
            <nav className="flex py-4 justify-center text-xl navbarStyle">
                <ul className="flex">
                    {links.map((element) => {
                        const isActive = pathname === (element.href);
                        return (
                            <li key={element.name} className={`${isActive ? 'active' : ''}`}>
                                <Link href={element.href} className={`${isActive ? 'active' : ''} p-4 font-bold rounded`}>
                                    {element.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>

    )
}