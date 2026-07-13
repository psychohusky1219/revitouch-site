export const bookingOptions = [
  { slug: "15-min-treatment", name: "15 Minute Treatment", duration: "15 min", price: "$40", note: "A focused reset for one area when time is tight.", calendarUrl: "https://www.revitouch.com/booking-calendar/15-min-treatment" },
  { slug: "cupping-therapy-20-min", name: "Cupping Therapy", duration: "20 min", price: "$40", note: "A targeted cupping session for tight or overworked tissue.", calendarUrl: "https://www.revitouch.com/booking-calendar/cupping-therapy-20-min" },
  { slug: "30-min-treatment", name: "30 Minute Treatment", duration: "30 min", price: "$80", note: "Focused hands-on care for a specific concern or problem area.", calendarUrl: "https://www.revitouch.com/booking-calendar/30-min-treatment" },
  { slug: "45-min-treatment", name: "45 Minute Treatment", duration: "45 min", price: "$130", note: "More time for focused work across several connected areas.", calendarUrl: "https://www.revitouch.com/booking-calendar/45-min-treatment" },
  { slug: "60-min-treatment", name: "60 Minute Treatment", duration: "1 hr", price: "$160", note: "A balanced full session with time for personalized, restorative care.", calendarUrl: "https://www.revitouch.com/booking-calendar/60-min-treatment", popular: true },
  { slug: "hot-stones-massage", name: "Hot Stones Massage", duration: "1 hr", price: "$190", note: "Warm stones and skilled touch for muscular ease and deep relaxation.", calendarUrl: "https://www.revitouch.com/booking-calendar/hot-stones-massage" },
  { slug: "75-min-treatment", name: "75 Minute Treatment", duration: "1 hr 15 min", price: "$200", note: "Extra time for detailed treatment and a more complete reset.", calendarUrl: "https://www.revitouch.com/booking-calendar/75-min-treatment" },
  { slug: "90-min-massage", name: "90 Minute Massage", duration: "1 hr 30 min", price: "$235", note: "The most spacious option for comprehensive full-body attention.", calendarUrl: "https://www.revitouch.com/booking-calendar/90-min-massage" },
] as const;

export type BookingOption = (typeof bookingOptions)[number];
