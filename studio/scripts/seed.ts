import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-07-13'})

const document = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  general: {
    phoneDisplay: '(917) 891-3456', phoneLink: '+19178913456',
    announcement: 'Women-owned wellness studio · New York City',
    footerDescription: 'Massage therapy and laser services in New York City.',
    copyright: '© 2026 ReviTouch. All rights reserved.',
    instagramUrl: 'https://www.instagram.com/revitouch/',
    linkedinUrl: 'https://www.linkedin.com/company/revitouch',
  },
  home: {
    heroEyebrow: 'Massage therapy, made for real life', heroTitle: 'Feel better.', heroAccent: 'Move freely.',
    heroDescription: 'Personalized, restorative treatments that fit your schedule—from a focused 15-minute reset to a full session of hands-on care.',
    reviewQuote: 'Every session feels intentional, professional, and completely tailored to what I need that day.',
  },
  treatments: [
    {_key: 'sports', name: 'Sports Massage', fallbackImage: '/images/sports.jpg', summary: 'Targeted treatment for flexibility, recovery, trigger points, and specific areas of discomfort.', detail: 'Sports massage combines focused pressure, trigger-point therapy, and myofascial techniques. It is designed for active bodies, desk-bound bodies, and anyone looking to improve mobility or address a stubborn problem area.'},
    {_key: 'deep-tissue', name: 'Deep Tissue Massage', fallbackImage: '/images/deep-tissue.jpg', summary: 'Slow, focused movement and firm pressure designed to reach deeper layers of muscle tissue.', detail: 'Deep tissue work uses deliberate movement and firmer pressure to address persistent tension. Your therapist adjusts throughout the session so the treatment remains productive and within your comfort level.'},
    {_key: 'swedish', name: 'Swedish Massage', fallbackImage: '/images/hero.jpg', summary: 'A restorative full-body treatment that supports circulation, relaxation, and overall wellbeing.', detail: 'Swedish massage uses flowing soft-tissue techniques to encourage circulation and a deep sense of ease. It is an excellent choice when stress relief, rest, and overall wellbeing are your priorities.'},
    {_key: 'cupping', name: 'Cupping Therapy', fallbackImage: '/images/cupping.jpg', summary: 'Therapeutic suction that can help ease stiffness, inflammation, and back discomfort.', detail: 'Cupping uses gentle suction to support circulation and create space in tight tissue. It can be used as a focused 20-minute treatment or incorporated into a broader care plan.'},
    {_key: 'hot-stone', name: 'Hot Stone Massage', fallbackImage: '/images/deep-tissue.jpg', summary: 'Warm stones and skilled touch help soften tension and encourage profound relaxation.', detail: 'Heated stones bring warmth to the muscles while your therapist works with calm, considered pressure. This hour-long treatment is designed for deep relaxation and muscular ease.'},
    {_key: 'prenatal', name: 'Prenatal Massage', fallbackImage: '/images/hero.jpg', summary: 'Supportive, comfortable care tailored to the changing needs of pregnancy.', detail: 'Prenatal massage is adapted for comfort and support, with positioning and pressure selected around your stage of pregnancy and individual needs.'},
  ],
  appointments: [
    {_key: '15-min', name: '15 Minute Treatment', slug: {_type: 'slug', current: '15-min-treatment'}, duration: '15 min', price: '$40', note: 'A focused reset for one area when time is tight.', calendarUrl: 'https://www.revitouch.com/booking-calendar/15-min-treatment', popular: false, showOnBookingPage: true},
    {_key: 'cupping-20', name: 'Cupping Therapy', slug: {_type: 'slug', current: 'cupping-therapy-20-min'}, duration: '20 min', price: '$40', note: 'A targeted cupping session for tight or overworked tissue.', calendarUrl: 'https://www.revitouch.com/booking-calendar/cupping-therapy-20-min', popular: false, showOnBookingPage: true},
    {_key: '30-min', name: '30 Minute Treatment', slug: {_type: 'slug', current: '30-min-treatment'}, duration: '30 min', price: '$80', note: 'Focused hands-on care for a specific concern or problem area.', calendarUrl: 'https://www.revitouch.com/booking-calendar/30-min-treatment', popular: false, showOnBookingPage: true},
    {_key: '45-min', name: '45 Minute Treatment', slug: {_type: 'slug', current: '45-min-treatment'}, duration: '45 min', price: '$130', note: 'More time for focused work across several connected areas.', calendarUrl: 'https://www.revitouch.com/booking-calendar/45-min-treatment', popular: false, showOnBookingPage: true},
    {_key: '60-min', name: '60 Minute Treatment', slug: {_type: 'slug', current: '60-min-treatment'}, duration: '1 hr', price: '$160', note: 'A balanced full session with time for personalized, restorative care.', calendarUrl: 'https://www.revitouch.com/booking-calendar/60-min-treatment', popular: true, showOnBookingPage: true},
    {_key: 'prenatal', name: 'Prenatal Massage', slug: {_type: 'slug', current: 'prenatal-massage'}, duration: '1 hr', price: '$180', note: 'Supportive care adapted for comfort during pregnancy.', popular: false, showOnBookingPage: false},
    {_key: 'hot-stone', name: 'Hot Stones Massage', slug: {_type: 'slug', current: 'hot-stones-massage'}, duration: '1 hr', price: '$190', note: 'Warm stones and skilled touch for muscular ease and deep relaxation.', calendarUrl: 'https://www.revitouch.com/booking-calendar/hot-stones-massage', popular: false, showOnBookingPage: true},
    {_key: '75-min', name: '75 Minute Treatment', slug: {_type: 'slug', current: '75-min-treatment'}, duration: '1 hr 15 min', price: '$200', note: 'Extra time for detailed treatment and a more complete reset.', calendarUrl: 'https://www.revitouch.com/booking-calendar/75-min-treatment', popular: false, showOnBookingPage: true},
    {_key: '90-min', name: '90 Minute Massage', slug: {_type: 'slug', current: '90-min-massage'}, duration: '1 hr 30 min', price: '$235', note: 'The most spacious option for comprehensive full-body attention.', calendarUrl: 'https://www.revitouch.com/booking-calendar/90-min-massage', popular: false, showOnBookingPage: true},
  ],
  laserPricing: [
    {_key: 'small', size: 'Small area', price: '$49', packagePrice: 'Package of 6 · $220', areas: ['Areola', 'Upper lip', 'Chin', 'Ears', 'Forehead', 'Inner butt', 'Fingers', 'Toes']},
    {_key: 'medium', size: 'Medium area', price: '$99', packagePrice: 'Package of 6 · $445', areas: ['Bikini line + happy trail', 'Upper arms', 'Lower arms', 'Underarms', 'Neck', 'Full butt']},
    {_key: 'large', size: 'Large area', price: '$139', packagePrice: 'Package of 6 · $625', areas: ['Brazilian', 'Upper legs', 'Lower legs', 'Shoulders', 'Full arms', 'Full face']},
    {_key: 'xlarge', size: 'X-large area', price: '$229', packagePrice: 'Package of 6 · $1,030', areas: ['Full legs', 'Full back + butt']},
  ],
  reviews: [
    {_key: 'review-1', quote: 'Every session feels intentional, professional, and completely tailored to what I need that day.', author: 'ReviTouch client'},
    {_key: 'review-2', quote: 'The attention to detail is outstanding. I leave feeling lighter, looser, and genuinely cared for.', author: 'ReviTouch client'},
    {_key: 'review-3', quote: 'ReviTouch understands how to work with an active body. The treatment is focused and the difference lasts.', author: 'ReviTouch client'},
    {_key: 'review-4', quote: 'I love that I can book a quick, effective session when my schedule is packed. Every minute counts.', author: 'ReviTouch client'},
    {_key: 'review-5', quote: 'Professional, warm, and deeply knowledgeable. I always feel listened to before the treatment begins.', author: 'ReviTouch client'},
    {_key: 'review-6', quote: 'The combination of personalized pressure and thoughtful technique has made ReviTouch part of my wellness routine.', author: 'ReviTouch client'},
  ],
  giftCards: [
    {_key: '40', amount: '$40', note: 'A thoughtful contribution toward focused care', featured: false},
    {_key: '80', amount: '$80', note: 'Perfect for a focused 30-minute treatment', featured: false},
    {_key: '130', amount: '$130', note: 'Give a restorative 45-minute treatment', featured: false},
    {_key: '160', amount: '$160', note: 'Our classic 60-minute massage experience', featured: true},
    {_key: '200', amount: '$200', note: 'More time to unwind with a 75-minute treatment', featured: false},
    {_key: '235', amount: '$235', note: 'A complete 90-minute restorative session', featured: false},
    {_key: '320', amount: '$320', note: 'Two 60-minute treatments or flexible future care', featured: false},
  ],
}

client.createOrReplace(document).then(() => console.log('ReviTouch website content created.'))
