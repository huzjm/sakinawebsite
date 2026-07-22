import { siteData } from "@/data/site";
export default function Footer() {
  return (
    <footer
      className="
      mt-20
      border-t
      border-gray-100
      py-10
      text-center
      "
    >

      <h2
        className="
        text-2xl
        "
      >
        {siteData.author.name}
      </h2>

      <p
        className="
        text-sm
        text-gray-500
        mt-2
        "
      >
        Author
      </p>


      <p
        className="
        text-xs
        text-gray-400
        mt-6
        "
      >
        © {new Date().getFullYear()} Sakina Shoaib. All rights reserved.
      </p>

    </footer>
  );
}