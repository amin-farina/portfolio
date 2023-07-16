import Link from "next/link"

export function NavBar() {
    const links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ]

    return (
        <div className="w-[100vw] mx-auto container">
            <nav className="flex py-4 justify-center text-xl">
                <ul className="flex space-x-3">
                    {links.map(({ name, link }) => (
                        <li key={link}>
                            <Link href={link} className="hover:text-slate-400 hover:underline ">
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    )
}