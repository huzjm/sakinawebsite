"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";
export default function Synopsis() {
  return (
    <section
      className="
      py-24
      px-6
      bg-[#f8f4fb]
      "
    >

      <motion.div
        initial={{
          opacity:0,
          y:30
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        viewport={{
          once:true
        }}
        transition={{
          duration:0.7
        }}

        className="
        max-w-4xl
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
          About The Book
        </p>



        <h2
          className="
          text-5xl
          mt-6
          "
        >
          {siteData.book.title}
        </h2>



        <div
          className="
          mt-10
          text-xl
          italic
          text-gray-600
          "
        >

          "Every story carries a piece of the heart
          that created it."

        </div>



        <p
          className="
          mt-10
          text-gray-600
          leading-relaxed
          text-lg
          "
        >

          {siteData.book.synopsis}

        </p>



        <a
          href="/buy"
          className="
          inline-block
          mt-10
          bg-purple-700
          text-white
          px-8
          py-3
          rounded-full
          hover:bg-purple-800
          transition
          "
        >
          Explore The Book
        </a>


      </motion.div>


    </section>
  );
}