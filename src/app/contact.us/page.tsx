import Link from "next/link"
export default function Contact() {
    return(
        <div className=" bg-white h-screen w-full">
<div className="mt-20  flex flex-col ">
<h1 className="styling font-bold sm:text-5xl text-4xl text-black text-center">CONTACT US</h1>

<div className="addUpStyling flex flex-col gap-1 justify-center items-center py-2">
    <div className="bg-red-700 h-1 w-64"></div>
    <div className="bg-red-700 h-1 w-56"></div>
    <div className="bg-red-700 h-1 w-48"></div>
    </div>

        <div className="addUpStyling flex flex-wrap gap-20 text-start justify-around items-center ">

<ul className="flex flex-col font-semibold sm:font-lg font-sm   ">

<li>Our Contact No: <span className="font-bold text-lg text-red-700 ">(012)34567891</span></li>
<div className="bg-black h-[1px] w-[57%]"></div>
<li>Our Cheffs: <span className="font-bold text-lg text-red-700">Bob, Alice, Sophia</span></li>
<div className="bg-black h-[1px] w-[55%]"></div>
<li>Our Resturant Location: <span className="font-bold text-lg text-red-700"> #abc area </span></li>
<div className="bg-black h-[1px] w-[60%]"></div>
<li>Our Gmail: <span className="font-bold text-lg text-red-700"><Link href={"/"}>onlinefooddelivery@gmail.com</Link></span> </li>
<div className="bg-black h-[1px] w-[80%]"></div>
<li>Our Facebook Link: <span className="font-bold text-lg text-red-700"><Link href={"/"}>onlinefooddelivery.facebook.com</Link></span> </li>
<div className="bg-black h-[1px] w-[98%]"></div>
<li>Our Instagram Link: <span className="font-bold text-lg text-red-700"><Link href={"/"}>onlinefooddelivery.instagram.com</Link></span> </li>
<div className="bg-black h-[1px] w-[100%]"></div>
</ul>
<div>
    <h1 className="styles text-xl font-bold text-center text-black mt-5">Send Any Message For Us</h1>
    <form action="/" className="flex flex-col border-2 bg-neutral-100 border-gray-500 rounded-md p-5 h-69 w-96 gap-5">
    <label htmlFor="name">Enter Your Name: <input className="items-center flex border-2 border-neutral-400 hover:border-red-700 w-[80%]" type="name" /></label>
    <label htmlFor="email">Enter Your Email: <input className="items-center flex border-2 border-neutral-400 hover:border-red-700 w-[80%]" type="email" /></label>
    <label htmlFor="message">Message: <textarea className="items-center flex border-2 border-neutral-400 hover:border-red-700 h-[20%] w-[80%]" name="message" id="message"></textarea></label>
    <input type="submit" className="bg-red-700 rounded-lg text-white h-8 w-[120px] " value={"Send Message"} />
    
    
    </form>

</div>


        </div>

</div>
</div>
    );
}