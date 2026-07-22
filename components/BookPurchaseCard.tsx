"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PaymentForm from "./PaymentForm";
interface Props {
  title: string;
  price: string;
  description: string;
  buttonText: string;
}


export default function BookPurchaseCard({
  
  title,
  price,
  description,
  buttonText,
}: Props) {
const [showForm, setShowForm] = useState(false);

  return (

    <motion.div

      whileHover={{
        y: -8
      }}

      transition={{
        duration:0.3
      }}

      className="
      bg-white
      border
      border-purple-100
      rounded-2xl
      p-10
      shadow-sm
      "

    >


      <div
        className="
        flex
        justify-center
        "
      >

        <Image

          src="/images/book-cover.png"

          alt="Book cover"

          width={180}

          height={270}

          className="
          rounded-lg
          shadow-md
          "

        />


      </div>



      <h2
        className="
        text-3xl
        mt-8
        "
      >

        {title}

      </h2>



      <p
        className="
        mt-4
        text-gray-600
        leading-relaxed
        "
      >

        {description}

      </p>



      <p
        className="
        text-4xl
        mt-8
        text-purple-700
        "
      >

        {price}

      </p>



      <button

onClick={() => setShowForm(!showForm)}

className="
mt-8
w-full
bg-purple-700
text-white
py-3
rounded-full
hover:bg-purple-800
transition
"

>

{showForm ? "Close" : buttonText}

</button>


{showForm && <PaymentForm />}
    </motion.div>

  );

}