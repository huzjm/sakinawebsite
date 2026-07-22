import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookPurchaseCard from "@/components/BookPurchaseCard";
import PaymentForm from "@/components/PaymentForm";
import PurchaseInfo from "@/components/PurchaseInfo";
import FAQ from "@/components/FAQ"; 
export default function BuyPage() {


return (

<main>


<Navbar />



<section

className="
min-h-screen
px-6
py-24
bg-[#fcfbfa]
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

Purchase

</p>



<h1

className="
text-6xl
mt-6
"

>

Get The Book

</h1>




<div

className="
grid
md:grid-cols-2
gap-10
mt-16
"

>


<BookPurchaseCard

title="Ebook PDF"

price="PKR 750"

description="
Receive the digital edition after payment confirmation.
"

buttonText="Buy Ebook"

/>




<BookPurchaseCard

title="Paperback"

price="PKR 2000"

description="
Receive the physical printed copy delivered to your address.
"

buttonText="Order Paperback"

/>



</div>


</div>


</section>

<PurchaseInfo />

<FAQ />

<Footer />


</main>


);


}