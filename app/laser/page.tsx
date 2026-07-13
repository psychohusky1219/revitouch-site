import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Laser Hair Removal & Skin Treatments | ReviTouch NYC",
  description: "Explore ReviTouch laser hair removal, photo rejuvenation, laser facials and dark spot treatments in New York City's Financial District.",
};

const hairRemoval = [
  { size: "Small area", price: "$49", packagePrice: "Package of 6 · $220", areas: ["Areola", "Upper lip", "Chin", "Ears", "Forehead", "Inner butt", "Fingers", "Toes"] },
  { size: "Medium area", price: "$99", packagePrice: "Package of 6 · $445", areas: ["Bikini line + happy trail", "Upper arms", "Lower arms", "Underarms", "Neck", "Full butt"] },
  { size: "Large area", price: "$139", packagePrice: "Package of 6 · $625", areas: ["Brazilian", "Upper legs", "Lower legs", "Shoulders", "Full arms", "Full face"] },
  { size: "X-large area", price: "$229", packagePrice: "Package of 6 · $1,030", areas: ["Full legs", "Full back + butt"] },
];

const faqs = [
  ["Does laser hair removal hurt?", "Sensation varies with hair density and thickness. Many clients describe a brief stinging feeling, while others feel very little. The Cynosure Elite+ is paired with a Zimmer cooling system to help minimize discomfort."],
  ["When might I see results?", "Some clients notice hair becoming sparser or finer after one or two sessions. ReviTouch recommends planning for a series of treatments; its current guidance says many clients pursue 6–8 sessions and may achieve up to 80% long-term hair reduction. Results vary with skin type, hair type, hormones and other individual factors."],
  ["Is treatment suitable for every skin type?", "The Cynosure Elite+ is designed to treat a broad range of skin and hair types. A free consultation is the right first step so a technician can assess your skin, hair and goals and recommend an individualized plan."],
  ["How long does an appointment take?", "Treatment time depends on the area. A small area may take only a few minutes, while a larger or combined treatment can take up to an hour."],
  ["Can I request a same-day appointment?", "Same-day appointments may be available. Contact ReviTouch early for the best chance of finding a time that works."],
  ["What payment methods are accepted?", "ReviTouch accepts cash, credit cards, PayPal, Apple Pay, Google Pay and tap-to-pay."],
];

export default function LaserServices() {
  return <PageShell>
    <section className="laser-hero">
      <div><p className="eyebrow">Laser services in the Financial District</p><h1>Smoother skin.<br /><em>A plan made for you.</em></h1><p>Laser hair removal and skin-focused treatments using the Cynosure Elite+ platform, with a complimentary consultation before you begin.</p><div className="actions"><a className="button" href="/contact">Schedule a free consultation</a><a className="text-link" href="tel:+19178913456">Call (917) 891-3456</a></div></div>
      <img src="/images/laser-hero.jpg" alt="ReviTouch technician providing a professional laser hair removal treatment" />
    </section>

    <section className="laser-intro">
      <div><p className="eyebrow light">Technology with personal attention</p><h2>Cynosure Elite+ laser treatments.</h2><p>ReviTouch uses the Cynosure Elite+ system for laser hair removal across a wide range of skin and hair types. Its Zimmer cooling system is designed to make treatment more comfortable.</p><p>After your first session, you can stay in direct contact with your technician if questions or concerns come up.</p></div>
      <div className="laser-facts"><article><strong>Free</strong><span>personal consultation</span></article><article><strong>6–8</strong><span>sessions often recommended</span></article><article><strong>Minutes–1 hr</strong><span>typical session range</span></article><article><strong>FiDi</strong><span>near the 1, 2, 3, 4, 5, R and W trains</span></article></div>
    </section>

    <section className="laser-pricing">
      <div className="section-head"><div><p className="eyebrow">Laser hair removal pricing</p><h2>Choose your treatment area.</h2></div><p>Single-session pricing and six-session packages are available. Your consultation can help confirm which category applies.</p></div>
      <div className="laser-price-grid">{hairRemoval.map((tier) => <article key={tier.size}><div><p>{tier.size}</p><strong>{tier.price}</strong><small>{tier.packagePrice}</small></div><ul>{tier.areas.map((area) => <li key={area}>{area}</li>)}</ul></article>)}</div>
      <div className="laser-extra-prices"><article><span>Full chest</span><strong>$179</strong><small>Package of 5 · $709</small></article><article><span>Full back</span><strong>$179</strong><small>Package of 5 · $709</small></article></div>
    </section>

    <section className="laser-skin-services">
      <img src="/images/laser-consultation.jpg" alt="ReviTouch technician performing a laser skin treatment" />
      <div><p className="eyebrow">Skin-focused treatments</p><h2>More than hair removal.</h2><div className="skin-service-card"><div><h3>Photo rejuvenation / laser facial</h3><p>ReviTouch lists photo rejuvenation options for acne-focused care and skin tightening.</p></div><strong>$149</strong><small>Package of 3 · $299</small></div><div className="skin-service-card"><div><h3>Dark spot treatment</h3><p>A focused treatment option priced by the individual spot.</p></div><strong>$49</strong><small>per spot</small></div><p className="medical-note">A consultation is required to determine whether a laser skin treatment is appropriate for your skin and goals. Results and treatment plans vary.</p></div>
    </section>

    <section className="laser-care">
      <div className="section-head"><div><p className="eyebrow">Before and after</p><h2>Prepare for a smoother visit.</h2></div><p>Your technician’s personalized instructions should always take priority.</p></div>
      <div className="laser-care-grid"><article><span>Before treatment</span><h3>Help your skin get ready.</h3><ul><li>Shave the treatment area about 24 hours beforehand with a regular razor.</li><li>Do not wax or tweeze the area before treatment.</li><li>Avoid tanning and direct sun exposure for two weeks.</li><li>Pause retinol only as directed by your skincare professional.</li><li>Tell your technician about antibiotics and all medications. Never stop a prescribed medication without speaking to the prescribing clinician.</li></ul></article><article><span>After treatment</span><h3>Keep the area cool and protected.</h3><ul><li>Avoid hot showers, saunas and hot tubs for 48 hours.</li><li>Avoid workouts or activities that cause heavy sweating for 24 hours.</li><li>Use aloe vera if irritation occurs and your technician recommends it.</li><li>Do not wax during your treatment series.</li><li>Use SPF 50+ and avoid direct sunlight for two weeks.</li></ul></article></div>
    </section>

    <section className="laser-faq"><div><p className="eyebrow">Frequently asked questions</p><h2>What to know before you book.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="page-cta"><div><h2>Start with a free consultation.</h2><p>Meet with a technician to discuss your skin type, goals, treatment area and recommended plan.</p></div><a className="button light-button" href="/contact">Contact ReviTouch</a></section>
  </PageShell>;
}
