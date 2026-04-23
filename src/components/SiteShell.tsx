import { Facebook, Instagram, Linkedin, Menu, Twitter, X, Youtube } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Founders", to: "/founders" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/zyvox-ai/" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "X", icon: Twitter, href: "#" },
];

const lockupVariants = {
  tight: {
    wrapper: "gap-1 sm:gap-1.5",
    logoBox: "h-11 w-30 sm:h-12 sm:w-32",
    wordmark: "text-lg lg:text-2xl tracking-[0.05em]",
  },
  balanced: {
    wrapper: "gap-1.5 sm:gap-2",
    logoBox: "h-11 w-32 sm:h-12 sm:w-36",
    wordmark: "text-lg lg:text-2xl tracking-[0.08em]",
  },
  wide: {
    wrapper: "gap-2.5 sm:gap-3",
    logoBox: "h-11 w-36 sm:h-12 sm:w-40",
    wordmark: "text-lg lg:text-2xl tracking-[0.14em]",
  },
};

const headerLockupStyle: keyof typeof lockupVariants = "tight";

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `nav-link text-sm font-semibold transition-colors ${isActive ? "nav-link-active text-brand-navy" : "text-muted-foreground hover:text-foreground"}`;

const SiteShell = () => {
  const [open, setOpen] = useState(false);
  const lockup = lockupVariants[headerLockupStyle];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-brand-navy text-primary-foreground">
        <div className="container flex min-h-10 flex-wrap items-center justify-between gap-2 py-2 text-xs sm:text-sm">
          <p className="font-medium">Operational systems for premium customer experience</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:hello@zyvoxautomations.com" className="opacity-90 hover:opacity-100 hover:underline">hello@zyvoxautomations.com</a>
            <a href="https://www.linkedin.com/company/zyvox-ai/" target="_blank" rel="noreferrer" className="opacity-90 hover:opacity-100 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between md:h-20">
          <NavLink to="/" className={`flex items-center ${lockup.wrapper}`} onClick={() => setOpen(false)}>
            <div className={`${lockup.logoBox} overflow-hidden rounded-md`}>
              <img src="/images/logo_without_background.jpg" alt="Zyvox Automations" className="h-full w-full object-contain" />
            </div>
            <span
              className={`hidden md:block ${lockup.wordmark} font-black leading-none text-brand-navy`}
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              ZYVOX AUTOMATIONS
            </span>
          </NavLink>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/contact" className="btn-pop hidden rounded-lg bg-brand-navy px-4 py-2 text-sm font-semibold text-primary-foreground md:inline-flex">
            Get Proposal
          </NavLink>

          <button className="md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={linkClasses}>
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-lg bg-brand-navy px-4 py-2 text-sm font-semibold text-primary-foreground">
                Get Proposal
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border bg-secondary/80 py-14">
        <div className="container grid gap-10 text-center md:text-left lg:grid-cols-4">
          <div>
            <div className="mx-auto h-14 w-48 overflow-hidden rounded-md md:mx-0">
              <img src="/images/logo_without_background.jpg" alt="Zyvox Automations" className="h-full w-full object-contain" />
            </div>
            <p className="mx-auto mt-4 max-w-xs text-sm text-muted-foreground md:mx-0">
              We build business-grade communication workflows that improve response quality, speed, and conversion.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-brand-navy">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><NavLink to="/services" className="hover:text-foreground">Services</NavLink></li>
              <li><NavLink to="/pricing" className="hover:text-foreground">Pricing</NavLink></li>
              <li><NavLink to="/industries" className="hover:text-foreground">Industries</NavLink></li>
              <li><NavLink to="/about" className="hover:text-foreground">About</NavLink></li>
              <li><NavLink to="/founders" className="hover:text-foreground">Founders</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-brand-navy">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:hello@zyvoxautomations.com" className="hover:text-foreground">hello@zyvoxautomations.com</a></li>
              <li><a href="tel:+10000000000" className="hover:text-foreground">+1 000 000 0000</a></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <h3 className="text-lg font-bold text-brand-navy">Ready to upgrade your operation?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Book a consultation and get a practical implementation roadmap.</p>
            <NavLink to="/contact" className="btn-pop mt-4 inline-flex rounded-lg bg-brand-navy px-4 py-2 text-sm font-semibold text-primary-foreground">
              Book Consultation
            </NavLink>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-navy">Social Platforms</p>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href === "#" ? undefined : "_blank"}
                      rel={social.href === "#" ? undefined : "noreferrer"}
                      className="inline-flex items-center gap-2 hover:text-foreground"
                    >
                      <social.icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zyvox Automations. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SiteShell;
