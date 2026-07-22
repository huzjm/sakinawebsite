import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentForm from "@/components/PaymentForm";
import PurchaseInfo from "@/components/PurchaseInfo";
import FAQ from "@/components/FAQ";
import { siteData } from "@/data/site";


export default function BuyPage(){

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
tracking-[0.35em]
text-sm
text-[#6B3A5B]
"

>

Book Store

</p>




<h1

className="
text-6xl
mt-8
"

>

Own A Copy

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

src={siteData.book.cover}

alt={siteData.book.title}

width={400}

height={600}

className="
rounded-3xl
shadow-2xl
"

/>


</div>







<div>

<h2

className="
text-5xl
"

>

{siteData.book.title}

</h2>



<p

className="
mt-6
text-lg
text-gray-600
leading-relaxed
"

>

{siteData.book.tagline}

</p>




<div

className="
mt-10
space-y-6
"

>



<div

className="
bg-white
border
border-[#ead9df]
rounded-3xl
p-8
"

>


<h3

className="
text-3xl
"

>

Digital Edition

</h3>


<p

className="
mt-3
text-gray-600
"

>

PDF ebook delivered after payment confirmation.

</p>


<p

className="
text-2xl
mt-5
text-[#6B3A5B]
"

>

{siteData.book.ebookPrice}

</p>


</div>





<div

className="
bg-white
border
border-[#ead9df]
rounded-3xl
p-8
"

>


<h3

className="
text-3xl
"

>

Paperback Edition

</h3>


<p

className="
mt-3
text-gray-600
"

>

Physical copy delivered after order confirmation.

</p>


<p

className="
text-2xl
mt-5
text-[#6B3A5B]
"

>

{siteData.book.paperbackPrice}

</p>


</div>



</div>



</div>



</div>





<div className="mt-32">

<PurchaseInfo />

</div>




<div className="mt-32">


<PaymentForm />


</div>




<div className="mt-32">

<FAQ />

</div>



</div>


</section>


<Footer />


</main>


);

}