"use client";

import { motion } from "framer-motion";


const highlights = [
  {
    title: "Emotional Journey",
    text: "A story filled with emotions, experiences, and meaningful moments."
  },

  {
    title: "Beautiful Storytelling",
    text: "Carefully written words that connect with the reader."
  },

  {
    title: "Memorable Moments",
    text: "A book designed to stay with you beyond the final page."
  }

];


export default function BookHighlights(){

return (

<section

className="
py-24
px-6
bg-[#f8f4fb]
"

>


<div

className="
max-w-6xl
mx-auto
text-center
"

>


<p

className="
uppercase
tracking-[0.3em]
text-sm
text-purple-700
"

>

Inside The Book

</p>



<h2

className="
text-5xl
mt-6
"

>

A Story Worth Experiencing

</h2>




<div

className="
grid
md:grid-cols-3
gap-8
mt-16
"

>


{
highlights.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

className="
bg-white
rounded-2xl
p-8
shadow-sm
"

>


<div

className="
text-3xl
text-purple-700
"

>

✦

</div>



<h3

className="
text-2xl
mt-5
"

>

{item.title}

</h3>



<p

className="
mt-4
text-gray-600
leading-relaxed
"

>

{item.text}

</p>



</motion.div>


))

}


</div>



</div>


</section>


);


}