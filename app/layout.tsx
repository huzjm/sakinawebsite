import type { Metadata } from "next";
import MobileBuyButton from "@/components/MobileBuyButton";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";


const playfair = Playfair_Display({

  variable: "--font-playfair",

  subsets:["latin"],

});

const lora = Lora({

  variable:"--font-lora",

  subsets:["latin"],

});
export const metadata = {

title:
"Sakina Shoaib | Author & Book Store",

description:
"Official website of author Sakina Shoaib. Discover her latest book, read about the author, and purchase your copy.",

keywords:[
"Sakina Shoaib",
"author",
"book",
"Pakistan writer",
"ebook"
]

};

export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="en">

<body

className={`
${playfair.variable}
${lora.variable}
antialiased
`}

>

<PageTransition>

{children}

</PageTransition>
<MobileBuyButton />
</body>


</html>

);

}