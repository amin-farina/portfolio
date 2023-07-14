import Link from "next/link"

export function NavBar() {
    const links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ]

    return (
        <div className="w-[100vw] mx-auto container">
            <nav className="flex justify-between py-4 ">
                <div className="flex justify-start items-center">
                    <Link href="/">
                        <img src="/assets/img/triangular.png" alt="" className="w-10" />
                    </Link>
                </div>
                <div className="flex justify-end items-center">
                    <ul className="flex space-x-3">
                        {links.map(({ name, link }) => (
                            <li key={link}>
                                <Link href={link} className="hover:text-slate-500 hover:underline ">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

        </div>
    )
}