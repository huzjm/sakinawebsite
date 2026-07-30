import Hero from "@/components/Hero";
import Synopsis from "@/components/Synopsis";
import AuthorPreview from "@/components/AuthorPreview";
import EditionCards from "@/components/EditionCards";

export default function Home() {
  return (
    <>
      <Hero />
      <Synopsis variant="teaser" />
      <AuthorPreview />
      <EditionCards variant="compact" />
    </>
  );
}
