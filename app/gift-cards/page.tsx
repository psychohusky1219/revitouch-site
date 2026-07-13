import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Massage Gift Cards | ReviTouch NYC",
  description: "Give a ReviTouch massage gift card in a flexible amount, with secure online purchase through the existing ReviTouch checkout.",
};

const amounts = ["$40", "$80", "$130", "$160", "$200", "$235", "$320"];
const checkoutUrl = "https://www.revitouch.com/gift-card";

export default function GiftCardsPage() {
  return <PageShell>
    <section className="gift-hero">
      <div><p className="eyebrow">A thoughtful way to care</p><h1>Give them time<br /><em>to feel better.</em></h1><p>A ReviTouch gift card gives someone you care about the freedom to choose the treatment and time that feels right for them.</p><div className="actions"><a className="button" href="#purchase-gift-card">Purchase a gift card</a><a className="text-link" href="tel:+19178913456">Questions? Call (917) 891-3456</a></div></div>
      <div className="gift-card-art" role="img" aria-label="ReviTouch gift card"><span>ReviTouch</span><strong>Time to feel better.</strong><small>Massage therapy · New York City</small><i /></div>
    </section>

    <section className="gift-values">
      <div><p className="eyebrow light">Flexible amounts</p><h2>A gift that fits.</h2><p>Choose one of the available values below. The recipient can use the card toward the ReviTouch care that works best for them.</p></div>
      <div className="gift-amounts" aria-label="Available gift card amounts">{amounts.map((amount) => <span key={amount}>{amount}</span>)}</div>
    </section>

    <section className="gift-how">
      <div className="section-head"><div><p className="eyebrow">Simple and thoughtful</p><h2>Three easy steps.</h2></div><p>Complete the purchase through ReviTouch’s existing secure gift-card checkout without leaving the new website.</p></div>
      <div><article><span>01</span><h3>Choose an amount</h3><p>Select from $40 to $320 and choose the quantity you need.</p></article><article><span>02</span><h3>Complete checkout</h3><p>Use the secure ReviTouch purchase form below.</p></article><article><span>03</span><h3>Give time to restore</h3><p>Let the recipient choose the care and appointment that suits them.</p></article></div>
    </section>

    <section className="gift-checkout" id="purchase-gift-card">
      <div><p className="eyebrow">Purchase your gift card</p><h2>Choose the perfect amount.</h2><p>The secure checkout below is provided by ReviTouch’s current Wix gift-card system.</p></div>
      <div className="gift-frame-wrap"><iframe className="gift-frame" src={checkoutUrl} title="Purchase a ReviTouch gift card" allow="payment" /></div>
      <p className="calendar-fallback">Checkout not showing? <a href={checkoutUrl}>Open the secure gift-card checkout directly</a>.</p>
    </section>

    <section className="booking-help gift-help"><div><p className="eyebrow light">Need a hand?</p><h2>We’re happy to help.</h2><p>Call or text ReviTouch with questions about amounts, purchasing, or using a gift card.</p></div><a className="button light-button" href="tel:+19178913456">Call (917) 891-3456</a></section>
  </PageShell>;
}
