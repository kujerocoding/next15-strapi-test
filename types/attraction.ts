// Type for Strapi image objects
export interface StrapiImage {
  id: number
  url: string
}

// Type for coordinates structure
export interface Coordinates {
  DD: {
    lat: number
    lng: number
  }
}

// Type for rich-text description blocks
export interface DescriptionChild {
  type: string
  text: string
}

export interface DescriptionBlock {
  type: string
  children: DescriptionChild[]
}

// Main Attraction type
export interface Attraction {
  id: number
  documentId: string
  title: string
  slug: string
  rating: number
  location: string
  duration: string
  priceSEK: number
  category: string
  availableFrom: string
  availableTo: string
  groupOfPeople: number
  kids: string | null
  activity: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  coordinates: Coordinates | null
  description: DescriptionBlock[]
  shortDesc: string
  imagePoster: StrapiImage | null
  imageCover: StrapiImage | null
  images: StrapiImage[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localizations: any[]
}

// Type for Strapi API response
export interface StrapiAttractionsResponse {
  data: Attraction[]
}
