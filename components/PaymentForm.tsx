
"use client";

import { useState } from "react";


export default function PaymentForm(){

const [submitted,setSubmitted] = useState(false);



async function handleSubmit(
e: React.SyntheticEvent<HTMLFormElement>
){

e.preventDefault();


const form = e.currentTarget;


const data = new FormData(form);



const response = await fetch(

"https://formspree.io/f/mnjezyzg",

{

method:"POST",

body:data,

headers:{

Accept:"application/json",

},

}

);



if(response.ok){

setSubmitted(true);

form.reset();

}


}




if(submitted){

return (

<div

className="
max-w-3xl
mx-auto
bg-white
rounded-3xl
border
border-[#ead9df]
p-12
text-center
shadow-sm
"

>


<div

className="
text-5xl
text-[#C48B9F]
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

Order Received

</h2>



<p

className="
mt-6
text-gray-600
text-lg
leading-relaxed
"

>

Thank you for your order.

After payment confirmation, your ebook will be
delivered to your email.

For faster confirmation, please send your
payment screenshot through WhatsApp.

</p>



</div>

)

}





return (

<form

onSubmit={handleSubmit}

className="
max-w-3xl
mx-auto
bg-white
rounded-3xl
border
border-[#ead9df]
p-8
md:p-12
shadow-sm
space-y-6
"

>



<div className="text-center">


<p

className="
uppercase
tracking-[0.3em]
text-sm
text-[#6B3A5B]
"

>

Complete Order

</p>


<h2

className="
text-4xl
mt-5
"

>

Payment Details

</h2>


</div>






<div

className="
bg-[#FCF8F5]
rounded-2xl
p-6
"

>


<h3

className="
text-2xl
"

>

Bank Transfer

</h3>



<p className="mt-4 text-gray-600">

Bank: Your Bank Name

</p>


<p className="text-gray-600">

Account Name: Sakina Shoaib

</p>


<p className="text-gray-600">

Account Number: XXXXXXXX

</p>


<p className="text-gray-600">

IBAN: PK00 XXXX XXXX

</p>


</div>





<input

name="name"

required

placeholder="Full Name"

className="
w-full
rounded-xl
border
p-4
focus:outline-none
focus:border-[#6B3A5B]
"

/>




<input

name="email"

required

type="email"

placeholder="Email Address"

className="
w-full
rounded-xl
border
p-4
focus:outline-none
focus:border-[#6B3A5B]
"

/>




<input

name="phone"

required

placeholder="WhatsApp Number"

className="
w-full
rounded-xl
border
p-4
focus:outline-none
focus:border-[#6B3A5B]
"

/>





<input

name="transaction"

required

placeholder="Transaction ID"

className="
w-full
rounded-xl
border
p-4
focus:outline-none
focus:border-[#6B3A5B]
"

/>





<select

name="book"

className="
w-full
rounded-xl
border
p-4
"

>

<option>
Digital Ebook
</option>


<option>
Paperback
</option>


</select>





<textarea

name="message"

rows={4}

placeholder="Message (optional)"

className="
w-full
rounded-xl
border
p-4
"

/>




<div

className="
bg-[#f3e5eb]
rounded-xl
p-5
text-gray-700
"

>

After submitting your order,
please send your payment screenshot through WhatsApp
for confirmation.

</div>





<button

className="
w-full
bg-[#6B3A5B]
text-white
py-4
rounded-full
text-lg
hover:-translate-y-1
hover:shadow-lg
"

>

Submit Order

</button>



</form>

);


}