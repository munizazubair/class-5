import Link from "next/link"
import Image from "next/image"
import image1 from "../public/IMG_20241007_144225.jpg"
import image2 from "../public/IMG_20241007_144313.jpg"
import image3 from "../public/IMG-20241007-WA0032.jpg"
import image4 from "../public/IMG-20241007-WA0027.jpg"
import image5 from "../public/IMG-20241007-WA0025.jpg"
import image6 from "../public/IMG-20241007-WA0024.jpg"
import image7 from "../public/IMG-20241007-WA0026.jpg"
import image8 from "../public/IMG-20241007-WA0028.jpg"
import image9 from "../public/IMG-20241007-WA0030.jpg"
import image10 from "../public/IMG-20241007-WA0031.jpg"
import image11 from "../public/IMG-20241007-WA0029.jpg"

export default function Offer() {
    return(
        <div>
            <div className="addStyling flex sm:mt-20 sm:text-5xl font-bold text-center justify-center text-black sm:gap-12 mt-16 text-4xl gap-8">
            <h1 className="text-red-700">%</h1>
            <h1>OFFERS</h1>
            <h1 className="text-red-700">%</h1>
            </div>

    <div className="addUpStyling flex flex-col gap-1 justify-center items-center py-2">
    <div className="bg-red-700 h-1 w-36"></div>
    <div className="bg-red-700 h-1 w-32"></div>
    <div className="bg-red-700 h-1 w-28"></div>
    </div>

            <div className="addUpStyling flex flex-wrap justify-center items-center mx-10 ">

<div className="mx-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%]  border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image1} alt="offer"/> 
    <h1 className="font-bold sm:text-lg my-1">Offer 1</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg sm:mx-6 mx-[10%]  ">20% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-[50%] mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%] border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image2} alt="offer"/> 
    <h1 className="font-bold text-lg my-1">Offer 2</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">05% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%]  border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image3} alt="offer"/> 
    <h1 className="font-bold text-lg my-1">Offer 3</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">26% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%]  border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image4} alt="offer"/> 
    <h1 className="font-bold text-lg my-1">Offer 4</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">07% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%]  border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image5} alt="offer"/> 
    <h1 className="font-bold text-lg my-1">Offer 5</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">50% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%] border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image6} alt="offer" /> 
    <h1 className="font-bold text-lg my-1">Offer 6</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">30% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%] border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image7} alt="offer"/> 
    <h1 className="font-bold text-lg my-1">Offer 7</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">05% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%]  border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image8} alt="offer" /> 
    <h1 className="font-bold text-lg my-1">Offer 8</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">10% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%]  border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image9} alt="offer" /> 
    <h1 className="font-bold text-lg my-1">Offer 9</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">15% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%]  border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image10} alt="offer" /> 
    <h1 className="font-bold text-lg my-1">Offer 10</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">35% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>

<div className="addUpStyling m-10 flex flex-col h-[5%] sm:h-64 sm:w-52 w-[90%]  border-2 border-gray-600 rounded-lg text-black hover:bg-neutral-200 hover:border-red-700">
    <Image src={image11} alt="offer"/> 
    <h1 className="font-bold text-lg my-1">Offer 11</h1>
    <button className="stylings h-16 w-36 border-neutral-700 border-2 font-bold shadow-2xl text-red-700 text-xl rounded-lg mx-6 ">20% Discount</button>
    <button className="bg-red-700 h-5 w-24 text-[12px] text-white rounded-lg border-2 border-black hover:bg-red-500 ml-28 mt-2 "><Link href={"/order.now"}>Order Now</Link></button>
</div>


</div>


        </div>
    )
}