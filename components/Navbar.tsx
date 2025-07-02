import Link from "next/link"

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm xl:max-w-7xl mx-auto">
            <div className="navbar-start">
                <img src="/logo/Automnex.png" className="bg-transparent h-8" alt="" srcSet="" />

                <a className="btn btn-ghost text-sm uppercase">Automnex</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}>About Us</Link></li>
                    <li>
                        <details>
                            <summary>Products</summary>
                            <ul className="p-2">
                                <li><Link href={"#guard"}>Guard</Link></li>
                                {/* <li><a>Trigger</a></li> */}
                            </ul>
                        </details>
                    </li>
                    <li><Link href={"#contact"}>Contact</Link></li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn bg-white text-black rounded-lg">Button</a>
            </div> */}
        </div>
    )
}

export default Navbar