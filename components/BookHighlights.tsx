"use client";

import { motion } from "framer-motion";


const highlights = [

{
title:"Emotional Journey",

text:
"A heartfelt experience exploring emotions, relationships, and moments that shape who we become."

},

{
title:"Beautiful Storytelling",

text:
"Carefully crafted words that invite readers into a meaningful and memorable world."

},

{
title:"Lasting Memories",

text:
"A story created to stay with you long after the final page has been read."

}

];



export default function BookHighlights(){


return (

<section

className="
py-32
px-6
bg-[#FCF8F5]
"

>


<div

className="
max-w-6xl
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

Inside The Book

</motion.p>





<h2

className="
text-5xl
md:text-6xl
mt-8
"

>

A Story Worth Experiencing

</h2>





<div

className="
mt-8
text-[#C48B9F]
text-3xl
"

>

✦

</div>






<div

className="
grid
md:grid-cols-3
gap-10
mt-16
"

>


{

highlights.map((item,index)=>(


<motion.div


key={item.title}


initial={{

opacity:0,

y:40

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
rounded-3xl
p-10
border
border-[#ead9df]
hover:-translate-y-2
transition
"


>


<div

className="
text-[#C48B9F]
text-3xl
"

>

✦

</div>



<h3

className="
text-3xl
mt-6
"

>

{item.title}

</h3>




<p

className="
mt-5
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