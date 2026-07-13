import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Book a Massage | ReviTouch NYC",
  description: "Choose a ReviTouch massage treatment and continue to the live calendar to select your appointment time.",
};

const bookingOptions = [
  { name: "15 Minute Treatment", duration: "15 min", price: "$40", note: "A focused reset for one area when time is tight.", link: "https://www.revitouch.com/booking-calendar/15-min-treatment" },
  { name: "Cupping Therapy", duration: "20 min", price: "$40", note: "A targeted cupping session for tight or overworked tissue.", link: "https://www.revitouch.com/booking-calendar/cupping-therapy-20-min" },
  { name: "30 Minute Treatment", duration: "30 min", price: "$80", note: "Focused hands-on care for a specific concern or problem area.", link: "https://www.revitouch.com/booking-calendar/30-min-treatment" },
  { name: "45 Minute Treatment", duration: "45 min", price: "$130", note: "More time for focused work across several connected areas.", link: "https://www.revitouch.com/booking-calendar/45-min-treatment" },
  { name: "60 Minute Treatment", duration: "1 hr", price: "$160", note: "A balanced full session with time for personalized, restorative care.", link: "https://www.revitouch.com/booking-calendar/60-min-treatment", popular: true },
  { name: "Hot Stones Massage", duration: "1 hr", price: "$190", note: "Warm stones and skilled touch for muscular ease and deep relaxation.", link: "https://www.revitouch.com/booking-calendar/hot-stones-massage" },
  { name: "75 Minute Treatment", duration: "1 hr 15 min", price: "$200", note: "Extra time for detailed treatment and a more complete reset.", link: "https://www.revitouch.com/booking-calendar/75-min-treatment" },
  { name: "90 Minute Massage", duration: "1 hr 30 min", price: "$235", note: "The most spacious option for comprehensive full-body attention.", link: "https://www.revitouch.com/booking-calendar/90-min-massage" },
];

export default function BookPreview() {
  return <PageShell>
    <section className="booking-hero">
      <div><p className="eyebrow">Book your ReviTouch treatment</p><h1>Choose the time.<br /><em>We’ll shape the care.</em></h1><p>Start with the session length that fits your day. On the next screen, you’ll choose an available date, time, and therapist.</p><a className="text-link" href="tel:+19178913456">Questions? Call or text (917) 891-3456</a></div>
      <div className="booking-hero-image"><img src="/images/hero.jpg" alt="Relaxing personalized massage treatment at ReviTouch" /><div><strong>Not sure what to book?</strong><span>A 60-minute treatment is a flexible place to begin.</span></div></div>
    </section>

    <section className="booking-steps"><article><span>01</span><div><strong>Choose a treatment</strong><p>Select the session length or specialty service that feels right.</p></div></article><article><span>02</span><div><strong>Pick your time</strong><p>Continue to the live ReviTouch calendar to see availability.</p></div></article><article><span>03</span><div><strong>Confirm your visit</strong><p>Enter your details and receive your booking confirmation.</p></div></article></section>

    <section className="booking-services">
      <div className="section-head"><div><p className="eyebrow">Massage appointments</p><h2>How much time does your body need?</h2></div><p>Every appointment is personalized. The duration simply determines how much time your therapist has to focus, restore, and respond to what your body needs that day.</p></div>
      <div className="booking-card-grid">{bookingOptions.map((option) => <article className={option.popular ? "popular" : ""} key={option.name}>{option.popular && <span className="popular-label">Most popular</span>}<div className="booking-card-top"><span>{option.duration}</span><strong>{option.price}</strong></div><h3>{option.name}</h3><p>{option.note}</p><a href={option.link}>View times <span>→</span></a></article>)}</div>
    </section>

    <section className="booking-help">
      <div><p className="eyebrow light">A little flexibility</p><h2>Don’t see the time you need?</h2><p>Call or text us. We may be able to fit you in even when your preferred appointment is not shown online.</p></div><a className="button light-button" href="tel:+19178913456">Call (917) 891-3456</a>
    </section>

    <section className="booking-policy"><div><span>Cancellation policy</span><h3>Please give at least 12 hours’ notice.</h3></div><p>Cancellations made within 12 hours of an appointment may be charged the full treatment amount.</p></section>
  </PageShell>;
}
