import Link from "next/link"
export default function Header() {
    return(
        <>
        <div className="flex bg-red-700 text-md text-white justify-between items-center w-full h-12 pl-2 pr-6 sm:text-xl fixed z-10 top-0  ">

        <div className="text-lg font-bold sm:text-2xl sm:font-bold">Online FOOD Delivery</div>

        <ul className="flex gap-2 sm:gap-3 ">
            <Link href={"/"} className="hover:underline" > <li >Home</li></Link>
            <Link href={"/menu"} className="hover:underline"> <li>Menu</li></Link>
            <Link href={"/offers"} className="hover:underline"> <li>Offers</li></Link>
            <Link href={"/contact.us"} className="hover:underline"> <li>Contact</li></Link>

        </ul>
        </div>
        </>
    )
}