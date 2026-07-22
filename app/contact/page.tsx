import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteData } from "@/data/site";


export default function ContactPage(){

return (

<main>

<Navbar />



<section

className="
py-32
px-6
"

>


<div

className="
max-w-5xl
mx-auto
text-center
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

Contact

</p>




<h1

className="
text-6xl
mt-8
"

>

Let's Connect

</h1>




<div

className="
mt-8
text-[#C48B9F]
text-3xl
"

>

✦

</div>




<p

className="
max-w-2xl
mx-auto
mt-8
text-lg
text-gray-600
leading-relaxed
"

>

Have questions about the book,
orders, or upcoming publications?

Get in touch and we would love to hear from you.

</p>







<div

className="
grid
md:grid-cols-2
gap-8
mt-16
"

>




<div

className="
bg-white
rounded-3xl
border
border-[#ead9df]
p-10
"

>


<div

className="
text-[#C48B9F]
text-3xl
"

>

✉

</div>



<h2

className="
text-3xl
mt-5
"

>

Email

</h2>



<p

className="
mt-4
text-gray-600
"

>

{siteData.contact.email}

</p>



</div>







<div

className="
bg-white
rounded-3xl
border
border-[#ead9df]
p-10
"

>


<div

className="
text-[#C48B9F]
text-3xl
"

>

✆

</div>



<h2

className="
text-3xl
mt-5
"

>

WhatsApp

</h2>



<p

className="
mt-4
text-gray-600
"

>

{siteData.contact.whatsapp}

</p>



</div>





</div>






<div

className="
mt-20
bg-[#FCF8F5]
rounded-3xl
p-10
"

>


<p

className="
text-xl
italic
text-gray-600
"

>

"Every reader begins a new journey
with every story."

</p>



</div>





</div>


</section>


<Footer />


</main>


);

}