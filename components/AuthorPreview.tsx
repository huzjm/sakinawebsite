"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";


export default function AuthorPreview() {

return (

<section
className="
py-24
px-6
"
>

<div
className="
max-w-6xl
mx-auto
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

>

<Image

src={siteData.author.image}

alt={siteData.author.name}

width={400}

height={400}

className="
rounded-2xl
shadow-lg
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
uppercase
tracking-[0.3em]
text-sm
text-purple-700
"
>

The Author

</p>


<h2
className="
text-5xl
mt-5
"
>

{siteData.author.name}

</h2>



<p
className="
mt-8
text-lg
text-gray-600
leading-relaxed
"
>

{siteData.author.bio}

</p>



<a

href="/about"

className="
inline-block
mt-8
border
border-purple-700
text-purple-700
px-8
py-3
rounded-full
hover:bg-purple-50
transition
"

>

Read More

</a>


</motion.div>


</div>


</section>

);

}