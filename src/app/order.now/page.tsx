import Image from "next/image"
import image from "../public/order.jpg"

export default function Order() {
    return(
        <div className="h-screen w-full bg-white flex justify-center items-center">
                <div className="addUpStyling flex flex-col justify-center items-center ">
            <div className="flex gap-2">
            <div className=" bg-red-700 h-10 w-2"></div>
            <h1 className="text-black sm:text-3xl text-xl font-bold bg-neutral-200">Get Ready! Your Meal is on the Way! </h1>
</div>
<div className="h-60 w-80 ">
            <Image src={image} className="addStyling rounded-lg my-5 " alt="food image"/>
            <h1 className="addUpStyling text-black text-xl font-semibold text-center">We will deliver your food fresh in a few more minutes... </h1></div>

            </div>      
            </div>     
                )
}