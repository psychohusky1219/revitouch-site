import { bookUrl } from "../data";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { label: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/revitouch/" },
  { label: "LinkedIn", Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/revitouch" },
];

function SocialLinks({ mobile = false }: { mobile?: boolean }) {
  return <div className={mobile ? "mobile-social-links" : "header-social-links"} aria-label="Social media">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`ReviTouch on ${social.label}`} title={social.label}>{mobile ? social.label : <social.Icon aria-hidden="true" />}</a>)}</div>;
}

export function Header(){return <><div className="announcement">Women-owned wellness studio · New York City <a href="tel:+19178913456">Call or text (917) 891-3456</a></div><header className="site-header"><a className="brand" href="/" aria-label="ReviTouch home"><img src="/images/logo.png" alt="ReviTouch Massage Therapy" /></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/treatments">Treatments</a><a href="/laser">Laser</a><a href="/about">About</a><a href="/gift-cards">Gift Cards</a><a href="/pricing">Pricing</a><a href="/reviews">Reviews</a><a href="/contact">Contact</a></nav><div className="header-actions"><SocialLinks /><a className="button small header-book" href={bookUrl}>Book now</a><details className="mobile-menu"><summary aria-label="Open navigation menu"><span /><span /><span /></summary><div className="mobile-menu-panel"><nav aria-label="Mobile navigation"><a href="/">Home</a><a href="/treatments">Treatments</a><a href="/laser">Laser services</a><a href="/about">About</a><a href="/gift-cards">Gift Cards</a><a href="/pricing">Pricing</a><a href="/reviews">Reviews</a><a href="/contact">Contact</a></nav><SocialLinks mobile /><a className="mobile-menu-book" href={bookUrl}>Book now</a></div></details></div></header></>}
export function Footer(){return <footer><a className="footer-brand" href="/"><img src="/images/logo.png" alt="ReviTouch" /></a><div><p>Massage therapy and laser services in New York City.</p><p>© 2026 ReviTouch. All rights reserved.</p></div><div className="footer-links"><a href="/treatments">Massage</a><a href="/laser">Laser</a><a href="/about">About</a><a href="/gift-cards">Gift Cards</a><a href="/contact">Contact</a></div></footer>}
export function MobileBar(){return null}
export function PageShell({children}:{children:React.ReactNode}){return <main><Header />{children}<Footer /><MobileBar /></main>}
