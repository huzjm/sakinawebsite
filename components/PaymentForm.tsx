"use client";

import { useState } from "react";


export default function PaymentForm() {

const [submitted, setSubmitted] = useState(false);


async function handleSubmit(
e: React.SyntheticEvent<HTMLFormElement>
) {

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
bg-green-50
border
border-green-200
rounded-2xl
p-8
text-center
"

>

<h2
className="
text-3xl
"
>

Order Received

</h2>


<p
className="
mt-4
text-gray-600
"
>

Thank you for your purchase request.

Please send your payment screenshot on WhatsApp
for confirmation.

</p>


</div>

);

}



return (

<form

onSubmit={handleSubmit}

className="
bg-white
border
border-purple-100
rounded-2xl
p-10
mt-12
space-y-6
"

>


<h2
className="
text-3xl
"
>

Complete Your Order

</h2>



<div

className="
bg-[#f8f4fb]
rounded-xl
p-6
text-left
space-y-2
"

>


<h3
className="
text-xl
"
>

Bank Transfer Details

</h3>


<p>
<strong>Bank:</strong> Your Bank Name
</p>


<p>
<strong>Account Name:</strong> Sakina Shoaib
</p>


<p>
<strong>Account Number:</strong> XXXXXXXX
</p>


<p>
<strong>IBAN:</strong> PK00 XXXX XXXX
</p>


</div>



<input

name="name"

required

placeholder="Full Name"

className="
w-full
border
rounded-lg
p-3
"

/>



<input

name="email"

required

type="email"

placeholder="Email Address"

className="
w-full
border
rounded-lg
p-3
"

/>



<input

name="phone"

required

placeholder="WhatsApp Number"

className="
w-full
border
rounded-lg
p-3
"

/>



<input

name="transaction"

required

placeholder="Transaction ID"

className="
w-full
border
rounded-lg
p-3
"

/>



<select

name="book"

className="
w-full
border
rounded-lg
p-3
"

>

<option>
Ebook PDF
</option>

<option>
Paperback
</option>


</select>




<textarea

name="message"

placeholder="Additional message"

rows={4}

className="
w-full
border
rounded-lg
p-3
"

/>



<div

className="
bg-purple-50
rounded-xl
p-5
text-left
"

>

<p>

After submitting, please send your payment screenshot to:

</p>


<p
className="
font-semibold
mt-2
text-purple-700
"
>

WhatsApp: +92 XXX XXXXXXX

</p>


</div>




<button

className="
w-full
bg-purple-700
text-white
py-3
rounded-full
hover:bg-purple-800
transition
"

>

Submit Order

</button>



</form>

);

}