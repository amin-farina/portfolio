'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'


export function NavBar() {
    const pathname = usePathname();
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },

    ]

    return (
        <div className="w-[100vw] mx-auto container">
            <nav className="flex py-4 justify-center text-xl">
                <ul className="flex">
                    {links.map((element) => {
                        const isActive = pathname === (element.href);
                        return (
                            <li key={element.name}>
                                <Link href={element.href} className={`${isActive ? 'text-black bg-white' : ''} p-4 font-bold rounded`}>
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