import Link from "next/link"
export default function Header() {
    return(
        <div>
            <div className="sm:h-14 h-12 text-md sm:text-lg flex justify-between sm:px-10 px-1 items-center text-white bg-red-700">
                <div className="sm:text-xl text-lg  font-bold ">Online FOOD Delivery</div>
                <div className="sm:text-lg text-md gap-2 flex ">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/menu"}>Menu</Link>
                    <Link href={"/offers"}>Offers</Link>
                    <Link href={"/contact.us"}>Contact</Link>
                </div>
            </div>
        </div>
    )
}