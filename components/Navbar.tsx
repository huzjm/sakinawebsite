"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Books",
    href: "/buy",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {

const [open,setOpen] = useState(false);

useEffect(() => {

const closeMenu = () => setOpen(false);

window.addEventListener("scroll", closeMenu);

return () => {
window.removeEventListener("scroll", closeMenu);
};

}, []);
return (

<motion.nav

initial={{ opacity:0, y:-20 }}

animate={{ opacity:1, y:0 }}

className="
sticky top-0 z-50
bg-white/80
backdrop-blur-md
border-b
border-gray-100
"

>


<div

className="
max-w-6xl
mx-auto
px-6
py-6
"

>


<div

className="
flex
flex-col
items-center
md:relative
"

>


{/* Mobile top row */}

<div

className="
w-full
flex
justify-between
items-center
md:hidden
"

>

<Link

href="/"

className="
text-2xl
text-purple-700
"

>

Sakina Shoaib

</Link>


<button

onClick={()=>setOpen(!open)}

className="
text-3xl
"

>

☰

</button>


</div>



{/* Desktop logo */}

<div className="hidden md:block">


<h1
className="
text-4xl
tracking-wide
text-purple-700
"
>

Sakina Shoaib

</h1>





</div>



{/* Desktop navigation */}

<div

className="
hidden
md:flex
gap-10
mt-6
text-sm
"

>

{
links.map((link)=>(
<Link

key={link.name}

href={link.href}

className="
text-gray-700
hover:text-purple-700
transition
"

>

{link.name}

</Link>
))

}

</div>



{/* Mobile menu */}

{
open && (

<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

className="
md:hidden
mt-6
flex
flex-col
gap-5
text-center
"

>

{
links.map((link)=>(
<Link

key={link.name}

href={link.href}

onClick={()=>setOpen(false)}

className="
text-gray-700
hover:text-purple-700
"

>

{link.name}

</Link>
))

}

</motion.div>

)

}



</div>


</div>


</motion.nav>

);

}