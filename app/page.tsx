import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Synopsis from "@/components/Synopsis";
import AuthorPreview from "@/components/AuthorPreview";
import BookHighlights from "@/components/BookHighlights";
export default function Home() {

  return (

    <main>

      <Navbar />
    <AuthorPreview />
    <BookHighlights />

      <Hero />
      <Synopsis />
      
      <Footer />

    </main>

  );

}