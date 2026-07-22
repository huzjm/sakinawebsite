import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/data/site";


export default function AboutPage(){

return (

<main>


<Navbar />


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
"

>


<div

className="
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

About The Author

</p>



<h1

className="
text-6xl
mt-6
"

>

{siteData.author.name}

</h1>


</div>



<div

className="
grid
md:grid-cols-2
gap-16
items-center
mt-20
"

>


<div

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
rounded-2xl
shadow-lg
"

/>


</div>




<div>

<h2

className="
text-4xl
"

>

A Writer's Journey

</h2>



<p

className="
mt-6
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

Through storytelling, Sakina Shoaib explores
human emotions, experiences, and the moments
that shape our lives.

</p>


</div>


</div>



<div

className="
mt-24
bg-[#f8f4fb]
rounded-3xl
p-12
text-center
"

>


<h2

className="
text-4xl
"

>

Writing Philosophy

</h2>


<p

className="
mt-6
text-xl
italic
text-gray-600
"

>

"Every story begins with a feeling,
and every page preserves a memory."

</p>


</div>



</div>


</section>


<Footer />


</main>


);

}