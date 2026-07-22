"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";


export default function AuthorPreview(){

return (

<section

className="
py-32
px-6
"

>


<div

className="
max-w-6xl
mx-auto
"

>


<motion.div

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
text-center
mb-16
"

>

<p

className="
uppercase
tracking-[0.35em]
text-sm
text-[#6B3A5B]
"

>

The Author

</p>



<h2

className="
text-5xl
md:text-6xl
mt-6
"

>

{siteData.author.name}

</h2>



<div

className="
mt-6
text-[#C48B9F]
text-2xl
"

>

✦

</div>


</motion.div>





<div

className="
grid
md:grid-cols-2
gap-16
items-center
"

>



<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
flex
justify-center
"

>


<Image

src={siteData.author.image}

alt={siteData.author.name}

width={450}

height={450}

className="
rounded-3xl
shadow-xl
object-cover
"

 />


</motion.div>






<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<p

className="
text-lg
text-gray-600
leading-relaxed
"

>

{siteData.author.bio}

</p>




<p

className="
mt-6
text-lg
text-gray-600
leading-relaxed
"

>

Through writing, Sakina Shoaib captures emotions,
experiences, and moments that connect readers
with stories close to the heart.

</p>





<Link

href="/about"

className="
inline-block
mt-10
bg-[#6B3A5B]
text-white
px-10
py-3
rounded-full
hover:-translate-y-1
shadow-md
"

>

Discover The Author

</Link>



</motion.div>


</div>


</div>


</section>

);

}