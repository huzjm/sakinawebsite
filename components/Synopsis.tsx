"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";


export default function Synopsis() {

return (

<section

className="
py-32
px-6
bg-white
"

>


<div

className="
max-w-5xl
mx-auto
text-center
"

>


<motion.p

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

className="
uppercase
tracking-[0.35em]
text-sm
text-[#6B3A5B]
"

>

About The Book

</motion.p>




<motion.h2

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-5xl
md:text-6xl
mt-8
"

>

{siteData.book.title}

</motion.h2>





<div

className="
my-10
"

>

<span

className="
text-[#C48B9F]
text-3xl
"

>

✦

</span>


</div>





<motion.div

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

className="
bg-[#FCF8F5]
rounded-3xl
p-10
md:p-14
"

>


<p

className="
text-2xl
italic
text-gray-600
leading-relaxed
"

>

"Every story begins with a feeling,
and every page preserves a memory."

</p>



</motion.div>





<motion.p

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mt-12
max-w-3xl
mx-auto
text-lg
text-gray-600
leading-relaxed
"

>

{siteData.book.synopsis}

</motion.p>






<a

href="/buy"

className="
inline-block
mt-12
border
border-[#6B3A5B]
text-[#6B3A5B]
px-10
py-3
rounded-full
hover:bg-[#6B3A5B]
hover:text-white
"

>

Discover The Book

</a>



</div>


</section>

);

}