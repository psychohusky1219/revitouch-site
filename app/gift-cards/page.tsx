import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { getSiteContent } from "../cms";

export const metadata: Metadata = {
  title: "Massage Gift Cards | ReviTouch NYC",
  description: "Give a ReviTouch massage gift card in a flexible amount, with secure online purchase through ReviTouch.",
};

const checkoutUrl = "https://www.revitouch.com/gift-card";

export default async function GiftCardsPage() {
  const {giftCards, general} = await getSiteContent();
  return <PageShell>
    <section className="gift-hero">
      <div>
        <p className="eyebrow">A thoughtful way to care</p>
        <h1>Give them time<br /><em>to feel better.</em></h1>
        <p>A ReviTouch gift card gives someone you care about the freedom to choose the treatment and time that feels right for them.</p>
        <div className="actions"><a className="button" href="#choose-gift-card">Choose a gift card</a><a className="text-link" href={`tel:${general.phoneLink}`}>Questions? Call {general.phoneDisplay}</a></div>
      </div>
      <div className="gift-card-art" role="img" aria-label="ReviTouch gift card"><span>ReviTouch</span><strong>Time to feel better.</strong><small>Massage therapy · New York City</small><i /></div>
    </section>

    <section className="gift-purchase" id="choose-gift-card">
      <div className="gift-purchase-heading">
        <div><p className="eyebrow light">Choose your gift</p><h2>A little care goes a long way.</h2></div>
        <p>Select an amount below, then complete your purchase in the secure ReviTouch checkout further down this page.</p>
      </div>
      <div className="gift-choice-grid">
        {giftCards.map((card) => <a className={`gift-choice${card.featured ? " featured" : ""}`} href="#gift-card-checkout" key={card.amount} aria-label={`Continue with a ${card.amount} ReviTouch gift card`}>
          {card.featured && <span className="gift-choice-badge">Most popular</span>}
          <span className="gift-choice-label">Gift card value</span>
          <strong>{card.amount}</strong>
          <p>{card.note}</p>
          <span className="gift-choice-action">Continue to checkout <b aria-hidden="true">↓</b></span>
        </a>)}
      </div>
      <div className="gift-secure-note"><span aria-hidden="true">✓</span><div><strong>Secure ReviTouch checkout</strong><p>Choose the same amount and quantity in the checkout below, then select <b>Buy Now</b>.</p></div></div>
    </section>

    <section className="gift-embedded-checkout" id="gift-card-checkout">
      <div><p className="eyebrow">Complete your purchase</p><h2>Secure gift-card checkout.</h2><p>Select your amount and quantity below. The old Wix navigation is hidden so the checkout feels like part of the new ReviTouch website.</p></div>
      <div className="gift-frame-wrap"><iframe className="gift-frame" src={checkoutUrl} title="Purchase a ReviTouch gift card" allow="payment" /></div>
      <p className="calendar-fallback">Checkout not showing? <a href={checkoutUrl} target="_blank" rel="noreferrer">Open the secure gift-card checkout directly</a>.</p>
    </section>

    <section className="gift-how">
      <div className="section-head"><div><p className="eyebrow">Simple and thoughtful</p><h2>Three easy steps.</h2></div><p>Choose the value, complete the secure purchase, and let them decide which ReviTouch treatment feels right.</p></div>
      <div><article><span>01</span><h3>Choose an amount</h3><p>Select one of the seven available values, from $40 to $320.</p></article><article><span>02</span><h3>Complete checkout</h3><p>Finish the purchase through ReviTouch’s existing secure checkout.</p></article><article><span>03</span><h3>Give time to restore</h3><p>The recipient can choose the care and appointment that suits them.</p></article></div>
    </section>

    <section className="booking-help gift-help"><div><p className="eyebrow light">Need a hand?</p><h2>We’re happy to help.</h2><p>Call or text ReviTouch with questions about amounts, purchasing, or using a gift card.</p></div><a className="button light-button" href={`tel:${general.phoneLink}`}>Call {general.phoneDisplay}</a></section>
  </PageShell>;
}
