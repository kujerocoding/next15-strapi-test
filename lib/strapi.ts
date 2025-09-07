import { StrapiAttractionsResponse } from "@/types/attraction"

const REVALIDATE = 60 // Revalidate every 60 seconds for ISR caching

/**
 * Fetch all attractions from Strapi API.
 * Uses Incremental Static Regeneration (ISR) for better performance.
 */
export async function fetchAttractions(): Promise<
  StrapiAttractionsResponse["data"]
> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/atrakcjes?populate=*`,
    {
      next: { revalidate: REVALIDATE }, // Enable ISR caching
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch attractions")
  }

  const data: StrapiAttractionsResponse = await res.json()
  return data.data // <-- Mutable type, no readonly error
}

/**
 * Fetch a single attraction by its slug.
 * Returns `null` if no matching attraction is found.
 */
export async function fetchAttractionBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/atrakcjes?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: REVALIDATE },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch attraction")
  }

  const data: StrapiAttractionsResponse = await res.json()
  return data.data.length > 0 ? data.data[0] : null
}
