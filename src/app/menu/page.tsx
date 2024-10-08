import Link from "next/link"
import Image from "next/image";
import image1 from "../public/IMG-20241006-WA0043.jpg"
import image2 from "../public/IMG-20241006-WA0044.jpg"
import image3 from "../public/IMG-20241006-WA0045.jpg"
import image4 from "../public/IMG-20241006-WA0046.jpg"
import image5 from "../public/IMG-20241006-WA0047.jpg"
import image6 from "../public/WhatsApp Image 2024-10-06 at 17.11.39_38c30c33.jpg"
import image7 from "../public/IMG-20241006-WA0068.jpg"
import image8 from "../public/IMG-20241006-WA0069.jpg"
import image9 from "../public/IMG-20241006-WA0067.jpg"
import image10 from "../public/IMG-20241006-WA0066.jpg"
import image11 from "../public/IMG-20241006-WA0065.jpg"
import image12 from "../public/IMG-20241006-WA0053.jpg"
import image13 from "../public/IMG-20241006-WA0054.jpg"
import image14 from "../public/IMG-20241006-WA0055.jpg"
import image15 from "../public/IMG-20241006-WA0056.jpg"
import image16 from "../public/IMG-20241006-WA0057.jpg"
import image17 from "../public/WhatsApp Image 2024-10-06 at 18.53.21_21a54789.jpg"
import Header from "../components/header";

export default function Menu() {
    return(
        <>
        <div className="mt-20">
<div className="m-10 ">
    <h1 className="styling font-bold text-black text-3xl ">Quick Bites</h1>
    <div className="flex flex-col gap-1">
    <div className="bg-red-700 h-1 w-40"></div>
    <div className="bg-red-700 h-1 w-36"></div>
    <div className="bg-red-700 h-1 w-32"></div>
    </div>
    <div className="flex flex-wrap">
    <div className="addUpStyling flex flex-col h-[5%] sm:h-52 sm:w-44  w-[90%] m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300 ">
            <Image src={image1} className="image" alt="food image"/>
            <h1 className="font-bold">Signature Sandwich</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[5%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300">
    <Image src={image2} className="image" alt="food image"/>
            <h1 className="font-bold">Pasta Paradise</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[5%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300">
    <Image src={image3} className="image" alt="food image"/>
            <h1 className="font-bold">Fries on Fire</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[5%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300 ">
    <Image src={image4} className="image" alt="food image"/>
            <h1 className="font-bold">Fried Chicken Delight</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[5%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black hover:border-red-700 hover:bg-neutral-300"> 
    <Image src={image5} className="image" alt="food image"/>
            <h1 className="font-bold">Savor the Burger</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black hover:border-red-700 hover:bg-neutral-300">
    <Image src={image6} className="image" alt="food image"/>
            <h1 className="font-bold">Pizza Paradise</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    </div>
</div>


<div className="m-10">
    <h1 className="styling font-bold text-black text-3xl ">Traditional Food</h1>
    <div className="flex flex-col gap-1">
    <div className="bg-red-700 h-1 w-40"></div>
    <div className="bg-red-700 h-1 w-36"></div>
    <div className="bg-red-700 h-1 w-32"></div>
    </div>
    <div className="flex flex-wrap">
    <div className="addUpStyling flex flex-col h-[5%] sm:h-52 sm:w-44  w-[90%] m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300 ">
            <Image src={image7} className="image" alt="food image"/>
            <h1 className="font-bold">Tasty Pulao</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300">
    <Image src={image8} className="image" alt="food image"/>
            <h1 className="font-bold">Savory Nihari</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]   m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300">
    <Image src={image9} className="image" alt="food image"/>
            <h1 className="font-bold">Flavourful Haleem</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300 ">
    <Image src={image10} className="image" alt="food image"/>
            <h1 className="font-bold">Nutritious Daal</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black hover:border-red-700 hover:bg-neutral-300"> 
    <Image src={image11} className="image" alt="dessert image"/>
            <h1 className="font-bold">Beef Biryani</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    </div>
</div>

<div className="m-10">
    <h1 className="styling font-bold text-black text-3xl ">Sweet Treats</h1>
    <div className="flex flex-col gap-1">
    <div className="bg-red-700 h-1 w-40"></div>
    <div className="bg-red-700 h-1 w-36"></div>
    <div className="bg-red-700 h-1 w-32"></div>
    </div>
    <div className="flex flex-wrap">
    <div className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300">
            <Image src={image12} className="image" alt="food image"/>
            <h1 className="font-bold">Chewy Cookies</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300">
    <Image src={image13} className="image" alt="food image"/>
            <h1 className="font-bold">Fudgy Brownies</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]   m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300">
    <Image src={image14} className="image" alt="food image"/>
            <h1 className="font-bold">Creamy Ice Cream</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black  hover:border-red-700 hover:bg-neutral-300 ">
    <Image src={image15} className="image" alt="food image"/>
            <h1 className="font-bold">Rich Chocolate Cake</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black hover:border-red-700 hover:bg-neutral-300"> 
    <Image src={image16} className="image" alt="dessert image"/>
            <h1 className="font-bold">Crispy Kunafa</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    <div  className="addUpStyling flex flex-col h-[3%] sm:h-52 sm:w-44  w-[90%]  m-3 border-gray-400 border-2 rounded-lg bg-white text-black hover:border-red-700 hover:bg-neutral-300"> 
    <Image src={image17} className="image" alt="dessert image"/>
            <h1 className="font-bold">Delicious Gulab Jamun</h1>
            <p>$$ Pakistan</p>
            <button className="bg-red-700 text-white rounded-lg h-5 border-b-2 border-black mt-2 w-28 text-sm font-semibold hover:h-10 hover:w-32"><Link href={"/order.now"}>ORDER NOW!</Link></button>
    </div>
    </div>
</div>
</div>

        </>
    );
}