"use client";

import Link from "next/link";


export default function MobileBuyButton(){


return (

<div

className="
fixed
bottom-5
left-5
right-5
z-50
md:hidden
"

>


<Link

href="/buy"

className="
block
text-center
bg-[#6B3A5B]
text-white
py-4
rounded-full
shadow-xl
"

>

Purchase The Book

</Link>


</div>

);


}