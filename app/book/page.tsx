import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { getSiteContent } from "../cms";

export const metadata: Metadata = {
  title: "Book a Massage or Laser Consultation | ReviTouch NYC",
  description: "Choose a ReviTouch massage treatment or begin with a complimentary laser consultation in New York City.",
};

export default async function BookPage() {
  const {appointments, general} = await getSiteContent();
  const bookingOptions = appointments.filter((option) => option.showOnBookingPage !== false && option.calendarUrl);
  return <PageShell>
    <section className="booking-hero">
      <div><p className="eyebrow">Book your ReviTouch treatment</p><h1>Choose the time.<br /><em>We’ll shape the care.</em></h1><p>Start with the session length that fits your day. Then choose an available date and time in the live ReviTouch calendar.</p><a className="text-link" href={`tel:${general.phoneLink}`}>Questions? Call or text {general.phoneDisplay}</a></div>
      <div className="booking-hero-image"><img src="/images/hero.jpg" alt="Relaxing personalized massage treatment at ReviTouch" /><div><strong>Not sure what to book?</strong><span>A 60-minute treatment is a flexible place to begin.</span></div></div>
    </section>

    <section className="booking-steps"><article><span>01</span><div><strong>Choose a treatment</strong><p>Select the session length or specialty service that feels right.</p></div></article><article><span>02</span><div><strong>Pick your time</strong><p>Continue to the live ReviTouch calendar to see availability.</p></div></article><article><span>03</span><div><strong>Confirm your visit</strong><p>Enter your details and receive your booking confirmation.</p></div></article></section>

    <section className="booking-services">
      <div className="section-head"><div><p className="eyebrow">Massage appointments</p><h2>How much time does your body need?</h2></div><p>Every appointment is personalized. The duration simply determines how much time your therapist has to focus, restore, and respond to what your body needs that day.</p></div>
      <div className="booking-card-grid">{bookingOptions.map((option) => <article className={"popular" in option && option.popular ? "popular" : ""} key={option.name}>{"popular" in option && option.popular && <span className="popular-label">Most popular</span>}<div className="booking-card-top"><span>{option.duration}</span><strong>{option.price}</strong></div><h3>{option.name}</h3><p>{option.note}</p><a href={`/book/schedule?service=${option.slug}`}>View available times <span>→</span></a></article>)}</div>
    </section>

    <section className="booking-extras">
      <article className="booking-laser-card"><div><p className="eyebrow light">Laser services</p><h2>Start with a complimentary consultation.</h2><p>Meet with a ReviTouch technician to discuss your skin type, goals, treatment area, and a personalized plan for laser hair removal or skin-focused treatments.</p></div><div><a className="button light-button" href="/contact">Request a consultation</a><a className="soft-link" href="/laser">Explore laser services →</a></div></article>
      <article className="booking-gift-card"><p className="eyebrow">Give the gift of care</p><h3>ReviTouch gift cards</h3><p>Choose a flexible amount for someone who could use time to feel better and move more freely.</p><a className="text-link" href="/gift-cards">Shop gift cards →</a></article>
    </section>

    <section className="booking-help">
      <div><p className="eyebrow light">A little flexibility</p><h2>Don’t see the time you need?</h2><p>Call or text us. We may be able to fit you in even when your preferred appointment is not shown online.</p></div><a className="button light-button" href={`tel:${general.phoneLink}`}>Call {general.phoneDisplay}</a>
    </section>

    <section className="booking-policy"><div><span>Cancellation policy</span><h3>Please give at least 12 hours’ notice.</h3></div><p>Cancellations made within 12 hours of an appointment may be charged the full treatment amount.</p></section>
  </PageShell>;
}
