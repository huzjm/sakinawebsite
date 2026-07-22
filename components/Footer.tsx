import Link from "next/link";
import { siteData } from "@/data/site";


const links = [

{
name:"Home",
href:"/"
},

{
name:"About",
href:"/about"
},

{
name:"Books",
href:"/buy"
},

{
name:"Contact",
href:"/contact"
}

];



export default function Footer(){

return (

<footer

className="
bg-[#2B2B2B]
text-white
mt-32
"

>


<div

className="
max-w-6xl
mx-auto
px-6
py-20
text-center
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



<h2

className="
text-4xl
mt-6
"

>

{siteData.author.name}

</h2>




<p

className="
mt-4
text-gray-300
"

>

Author | Writer | Storyteller

</p>





<div

className="
flex
justify-center
gap-8
mt-10
flex-wrap
"

>

{

links.map((link)=>(

<Link

key={link.name}

href={link.href}

className="
text-gray-300
hover:text-white
transition
"

>

{link.name}

</Link>

))

}

</div>





<div

className="
border-t
border-white/20
mt-12
pt-8
text-gray-400
"

>

© {new Date().getFullYear()} {siteData.author.name}.
All rights reserved.

</div>



</div>



</footer>


);

}