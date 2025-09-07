import Image from "next/image"

import { Attraction } from "@/types/attraction"

export default function AttractionCard({
  attraction,
}: {
  attraction: Attraction
}) {
  const { slug, title, shortDesc, imagePoster } = attraction
  return (
    <a
      href={`/attractions/${slug}`}
      className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      {/* Poster Image */}

      <Image
        src={
          imagePoster
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imagePoster.url}`
            : "/noimage.svg"
        }
        alt={title || "default image"}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />

      {/* Attraction Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{shortDesc}</p>
      </div>
    </a>
  )
}
