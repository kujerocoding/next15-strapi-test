import Image from "next/image"
import { notFound } from "next/navigation"
import { fetchAttractionBySlug } from "@/lib/strapi"
import {
  Attraction,
  StrapiImage,
  DescriptionChild,
  DescriptionBlock,
} from "@/types/attraction"

export default async function AttractionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // Wait for dynamic route param
  const { slug } = await params

  // Fetch single attraction data from Strapi
  const attraction: Attraction | null = await fetchAttractionBySlug(slug)

  // If attraction is missing, show Next.js 404 page
  if (!attraction) {
    notFound()
  }

  const {
    title,
    imageCover,
    imagePoster,
    images,
    shortDesc,
    description,
    priceSEK,
    location,
    duration,
    category,
    activity,
    availableFrom,
    availableTo,
    groupOfPeople,
    kids,
    rating,
    coordinates,
  } = attraction

  // Use fallback image if no cover is available
  const mainImageUrl = imageCover?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageCover.url}`
    : "/noimage.svg"

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {/* Main Cover Image */}
      <Image
        src={mainImageUrl}
        alt={title || "default image"}
        width={900}
        height={500}
        className="rounded-lg shadow-md mb-6"
        priority
      />

      {/* Short Description */}
      {shortDesc && <p className="text-gray-700 mb-6">{shortDesc}</p>}

      {/* Price & Rating Section */}
      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-6">
        <p className="text-blue-600 font-semibold text-lg">
          Price: {priceSEK} SEK
        </p>
        {rating && <p className="text-yellow-600 font-medium">⭐ {rating}/5</p>}
      </div>

      {/* Extra Details About the Attraction */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm mb-8">
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Location:</strong> {location}
          </li>
          <li>
            <strong>Duration:</strong> {duration}
          </li>
          <li>
            <strong>Category:</strong> {category}
          </li>
          <li>
            <strong>Activity Level:</strong> {activity}
          </li>
          <li>
            <strong>Available From:</strong>{" "}
            {availableFrom
              ? new Date(availableFrom).toLocaleDateString()
              : "N/A"}
          </li>
          <li>
            <strong>Available To:</strong>{" "}
            {availableTo ? new Date(availableTo).toLocaleDateString() : "N/A"}
          </li>
          <li>
            <strong>Group Size:</strong> {groupOfPeople} people
          </li>
          <li>
            <strong>Kids:</strong> {kids || "N/A"}
          </li>
          {coordinates?.DD && (
            <li>
              <strong>Coordinates:</strong> {coordinates.DD.lat},{" "}
              {coordinates.DD.lng}
            </li>
          )}
        </ul>
      </div>

      {/* Full Description Section */}
      {description?.length > 0 && (
        <div className="prose prose-gray max-w-none mb-8">
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          {description.map((block: DescriptionBlock, index: number) => (
            <p key={index}>
              {block.children
                ?.map((child: DescriptionChild) => child.text)
                .join(" ")}
            </p>
          ))}
        </div>
      )}

      {/* Poster Image */}
      {imagePoster?.url && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Poster</h2>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imagePoster.url}`}
            alt={`${title} Poster`}
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
      )}

      {/* Image Gallery */}
      {images?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img: StrapiImage) => (
              <Image
                key={img.id}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`}
                alt={title}
                width={400}
                height={250}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
