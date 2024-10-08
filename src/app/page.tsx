import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div className="addStyling bg-white flex justify-center items-center h-screen w-full ">

    <div className="text-center ">
      <h1 className="text-black-700 text-5xl font-bold sm:text-6xl mt-10 ">Online FOOD Delivery</h1>
      <h1 className="text-red-700 text-xl sm:text-3xl  font-bold">Your Favourite Dishes, Just a Click Away!</h1>
      <div className="flex flex-col items-center justify-center">
      <button className="border-2 rounded-md text-white text-md h6 w-32 sm:text-lg font-semibold bg-red-700 sm:h-10 sm:w-40 mt-5 sm:mt-8 hover:bg-red-500"><Link href={"/menu"}>Explore Menu</Link></button>
      <button className="border-2 rounded-md text-black text-md h6 w-32 sm:text-lg font-semibold border-neutral-700 sm:h-10 sm:w-40  hover:bg-neutral-500"><Link href={"/offers"}>Get Offers</Link></button>
      </div>
    </div>
    </div>
    </div>
  );
}
