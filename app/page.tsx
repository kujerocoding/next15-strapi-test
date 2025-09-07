import Link from "next/link"

export default async function Home() {
  return (
    // Container for the homepage content
    <div className="max-w-5xl mx-auto px-6 py-8 text-center">
      {/* Link to the Attractions page */}
      <Link
        href="/attractions"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        View Attractions
      </Link>
    </div>
  )
}
