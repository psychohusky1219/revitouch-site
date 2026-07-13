import {cache} from 'react'
import {bookingOptions as defaultBookingOptions} from './book/services'
import {services as defaultServices} from './data'

export type Treatment = {name: string; image: string; summary: string; detail: string}
export type Appointment = {slug: string; name: string; duration: string; price: string; note: string; calendarUrl?: string; popular?: boolean; showOnBookingPage?: boolean}
export type Review = {quote: string; author: string}
export type LaserPrice = {size: string; price: string; packagePrice: string; areas: string[]}
export type GiftCard = {amount: string; note: string; featured?: boolean}

export type SiteContent = {
  general: {phoneDisplay: string; phoneLink: string; announcement: string; footerDescription: string; copyright: string; instagramUrl: string; linkedinUrl: string}
  home: {heroEyebrow: string; heroTitle: string; heroAccent: string; heroDescription: string; heroImageUrl: string; reviewQuote: string}
  treatments: Treatment[]
  appointments: Appointment[]
  reviews: Review[]
  laserPricing: LaserPrice[]
  giftCards: GiftCard[]
}

const defaultReviews: Review[] = [
  'Every session feels intentional, professional, and completely tailored to what I need that day.',
  'The attention to detail is outstanding. I leave feeling lighter, looser, and genuinely cared for.',
  'ReviTouch understands how to work with an active body. The treatment is focused and the difference lasts.',
  'I love that I can book a quick, effective session when my schedule is packed. Every minute counts.',
  'Professional, warm, and deeply knowledgeable. I always feel listened to before the treatment begins.',
  'The combination of personalized pressure and thoughtful technique has made ReviTouch part of my wellness routine.',
].map((quote) => ({quote, author: 'ReviTouch client'}))

const defaults: SiteContent = {
  general: {phoneDisplay: '(917) 891-3456', phoneLink: '+19178913456', announcement: 'Women-owned wellness studio · New York City', footerDescription: 'Massage therapy and laser services in New York City.', copyright: '© 2026 ReviTouch. All rights reserved.', instagramUrl: 'https://www.instagram.com/revitouch/', linkedinUrl: 'https://www.linkedin.com/company/revitouch'},
  home: {heroEyebrow: 'Massage therapy, made for real life', heroTitle: 'Feel better.', heroAccent: 'Move freely.', heroDescription: 'Personalized, restorative treatments that fit your schedule—from a focused 15-minute reset to a full session of hands-on care.', heroImageUrl: '/images/hero.jpg', reviewQuote: defaultReviews[0].quote},
  treatments: defaultServices.map((service) => ({name: service.name, image: service.image, summary: service.text, detail: service.detail})),
  appointments: [
    ...defaultBookingOptions.map((option) => ({...option, showOnBookingPage: true})),
    {slug: 'prenatal-massage', name: 'Prenatal Massage', duration: '1 hr', price: '$180', note: 'Supportive care adapted for comfort during pregnancy.', showOnBookingPage: false},
  ],
  reviews: defaultReviews,
  laserPricing: [
    {size: 'Small area', price: '$49', packagePrice: 'Package of 6 · $220', areas: ['Areola', 'Upper lip', 'Chin', 'Ears', 'Forehead', 'Inner butt', 'Fingers', 'Toes']},
    {size: 'Medium area', price: '$99', packagePrice: 'Package of 6 · $445', areas: ['Bikini line + happy trail', 'Upper arms', 'Lower arms', 'Underarms', 'Neck', 'Full butt']},
    {size: 'Large area', price: '$139', packagePrice: 'Package of 6 · $625', areas: ['Brazilian', 'Upper legs', 'Lower legs', 'Shoulders', 'Full arms', 'Full face']},
    {size: 'X-large area', price: '$229', packagePrice: 'Package of 6 · $1,030', areas: ['Full legs', 'Full back + butt']},
  ],
  giftCards: [
    {amount: '$40', note: 'A thoughtful contribution toward focused care'}, {amount: '$80', note: 'Perfect for a focused 30-minute treatment'},
    {amount: '$130', note: 'Give a restorative 45-minute treatment'}, {amount: '$160', note: 'Our classic 60-minute massage experience', featured: true},
    {amount: '$200', note: 'More time to unwind with a 75-minute treatment'}, {amount: '$235', note: 'A complete 90-minute restorative session'},
    {amount: '$320', note: 'Two 60-minute treatments or flexible future care'},
  ],
}

type SanityContent = Partial<Omit<SiteContent, 'treatments' | 'appointments' | 'home'>> & {
  home?: Partial<SiteContent['home']>
  treatments?: Array<{name?: string; summary?: string; detail?: string; fallbackImage?: string; imageUrl?: string}>
  appointments?: Array<{name?: string; slug?: {current?: string}; duration?: string; price?: string; note?: string; calendarUrl?: string; popular?: boolean; showOnBookingPage?: boolean}>
}

const query = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  general,
  home{heroEyebrow, heroTitle, heroAccent, heroDescription, reviewQuote, "heroImageUrl": heroImage.asset->url},
  treatments[]{name, summary, detail, fallbackImage, "imageUrl": image.asset->url},
  appointments[]{name, slug, duration, price, note, calendarUrl, popular, showOnBookingPage},
  laserPricing[]{size, price, packagePrice, areas},
  reviews[]{quote, author},
  giftCards[]{amount, note, featured}
}`

function populated<T>(value: T[] | undefined, fallback: T[]) {return value && value.length ? value : fallback}

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sdujfzmd'
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  const url = `https://${projectId}.api.sanity.io/v2026-07-13/data/query/${dataset}?query=${encodeURIComponent(query)}`

  try {
    const response = await fetch(url, {next: {revalidate: 60}, signal: AbortSignal.timeout(3500)})
    if (!response.ok) return defaults
    const payload = (await response.json()) as {result?: SanityContent}
    const content = payload.result
    if (!content) return defaults
    const treatments = content.treatments?.map((item, index) => ({name: item.name || defaults.treatments[index]?.name || 'Treatment', summary: item.summary || defaults.treatments[index]?.summary || '', detail: item.detail || defaults.treatments[index]?.detail || '', image: item.imageUrl || item.fallbackImage || defaults.treatments[index]?.image || '/images/hero.jpg'}))
    const appointments = content.appointments?.map((item, index) => ({slug: item.slug?.current || defaults.appointments[index]?.slug || `appointment-${index + 1}`, name: item.name || defaults.appointments[index]?.name || 'Appointment', duration: item.duration || defaults.appointments[index]?.duration || '', price: item.price || defaults.appointments[index]?.price || '', note: item.note || defaults.appointments[index]?.note || '', calendarUrl: item.calendarUrl, popular: item.popular, showOnBookingPage: item.showOnBookingPage}))
    return {
      general: {...defaults.general, ...content.general}, home: {...defaults.home, ...content.home},
      treatments: populated(treatments, defaults.treatments), appointments: populated(appointments, defaults.appointments),
      reviews: populated(content.reviews as Review[] | undefined, defaults.reviews), laserPricing: populated(content.laserPricing as LaserPrice[] | undefined, defaults.laserPricing), giftCards: populated(content.giftCards as GiftCard[] | undefined, defaults.giftCards),
    }
  } catch {return defaults}
})
