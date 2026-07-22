"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";


export default function Hero() {

return (

<section

className="
relative
min-h-screen
flex
items-center
justify-center
px-6
py-24
overflow-hidden
"

>


{/* Background decoration */}

<div

className="
absolute
top-20
left-1/2
-translate-x-1/2
w-125
h-125
bg-[#f3e5eb]
rounded-full
blur-3xl
opacity-60
"

>



</div>




<div

className="
relative
max-w-5xl
mx-auto
text-center
"

>


<motion.p

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

className="
uppercase
tracking-[0.35em]
text-sm
text-[#6B3A5B]
"

>

New Release

</motion.p>





<motion.div

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.8
}}

className="
mt-10
flex
justify-center
"

>


<motion.div

whileHover={{

scale:1.05,

rotate:2

}}

whileTap={{

scale:0.98

}}

transition={{

type:"spring",

stiffness:200

}}

>


<Image

src={siteData.book.cover}

alt={siteData.book.title}

width={350}

height={520}

className="
rounded-xl
shadow-2xl
"
priority
/>


</motion.div>


</motion.div>





<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.2,
duration:.8
}}

className="
text-6xl
md:text-7xl
mt-12
text-[#2B2B2B]
"

>

{siteData.book.title}

</motion.h1>





<div

className="
flex
justify-center
my-8
"

>

<span

className="
text-[#C48B9F]
text-2xl
"

>

✦

</span>


</div>





<motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.4,
duration:.8
}}

className="
max-w-2xl
mx-auto
text-lg
text-gray-600
leading-relaxed
"

>

{siteData.book.tagline}

</motion.p>






<Link

href="/buy"

className="
inline-block
mt-10
bg-[#6B3A5B]
text-white
px-10
py-4
rounded-full
shadow-lg
hover:-translate-y-1
hover:shadow-xl
"

>

Purchase The Book

</Link>



</div>



</section>


);

}