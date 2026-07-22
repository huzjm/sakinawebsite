"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/site";
export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      py-20
      "
    >

      <div
        className="
        max-w-6xl
        w-full
        grid
        md:grid-cols-2
        gap-16
        items-center
        "
      >


        {/* Book Image */}

        <motion.div
          initial={{
            opacity:0,
            y:40
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:0.8
          }}
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
            rounded-lg
            shadow-xl
            "
          />

        </motion.div>



        {/* Text */}

        <motion.div

          initial={{
            opacity:0,
            x:40
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-purple-700
            mb-5
            "
          >
            A New Release
          </p>


          <h1
            className="
            text-6xl
            leading-tight
            text-gray-800
            "
          >
            {siteData.book.title}
          </h1>


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
            flex
            gap-5
            mt-10
            "
          >

            <button
              className="
              bg-purple-700
              text-white
              px-8
              py-3
              rounded-full
              hover:bg-purple-800
              transition
              "
            >
              Buy The Book
            </button>


            <button
              className="
              border
              border-purple-700
              text-purple-700
              px-8
              py-3
              rounded-full
              hover:bg-purple-50
              transition
              "
            >
              Learn More
            </button>


          </div>


        </motion.div>


      </div>


    </section>
  );
}