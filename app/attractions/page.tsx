import Link from "next/link"
import { fetchAttractions } from "@/lib/strapi"
import { Attraction } from "@/types/attraction"
import AttractionCard from "@/components/AttractionCard"

export default async function AttractionsPage() {
  // Fetch all attractions from the Strapi API
  const attractions: Attraction[] = await fetchAttractions()

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Header section with title and back button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Attractions</h1>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Show message if there are no attractions */}
      {attractions.length === 0 ? (
        <p className="text-gray-600">No attractions found.</p>
      ) : (
        // Render a grid of attraction cards
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction: Attraction) => {
            return (
              <AttractionCard
                key={attraction.id} // Use unique ID for better performance
                attraction={attraction} // Pass attraction data to the card component
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
