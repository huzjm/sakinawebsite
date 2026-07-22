import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function ContactPage() {

  return (

    <main>

      <Navbar />


      <section
        className="
        min-h-screen
        px-6
        py-24
        "
      >

        <div
          className="
          max-w-3xl
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
            Contact
          </p>


          <h1
            className="
            text-6xl
            mt-6
            "
          >
            Get In Touch
          </h1>


          <p
            className="
            mt-8
            text-lg
            text-gray-600
            "
          >
            For book inquiries, collaborations, and messages,
            please reach out.
          </p>


          <div
            className="
            mt-10
            space-y-4
            "
          >

            <p>
              Email: example@email.com
            </p>

            <p>
              WhatsApp: +92 XXX XXXXXXX
            </p>


          </div>


        </div>


      </section>


      <Footer />


    </main>

  );
}