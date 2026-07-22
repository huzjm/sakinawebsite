const questions = [

{
q:"How do I pay?",
a:"Payment can be made through bank transfer using the provided details."
},

{
q:"When will I receive the ebook?",
a:"After payment confirmation, the ebook will be sent to your email."
},

{
q:"Can I order a paperback?",
a:"Yes. Paperback orders can be placed through the same form."
},

];


export default function FAQ(){

return (

<section

className="
mt-20
"

>


<h2

className="
text-4xl
text-center
"

>

Frequently Asked Questions

</h2>



<div

className="
max-w-3xl
mx-auto
mt-10
space-y-5
"

>


{
questions.map((item)=>(


<div

key={item.q}

className="
border
rounded-xl
p-6
"

>


<h3
className="
text-xl
"
>

{item.q}

</h3>


<p
className="
mt-3
text-gray-600
"
>

{item.a}

</p>


</div>


))

}


</div>


</section>

);

}