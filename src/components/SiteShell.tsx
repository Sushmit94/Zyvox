import { Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "About", to: "/about" },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `nav-link text-sm font-semibold transition-colors ${isActive ? "nav-link-active text-[#001F3F]" : "text-[#001F3F]/50 hover:text-[#001F3F]"}`;

const SiteShell = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // ── Scroll to top on every route change ──────────────────
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Glassmorphism Navbar ──────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#001F3F]/5 glass-nav">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:px-8 md:h-20">
          <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <div className="h-10 w-44 overflow-hidden rounded-md sm:h-12 sm:w-56 md:h-14 md:w-72">
              <img src="/images/main_logo.PNG" alt="Zyvox Automations" className="h-full w-full object-contain" />
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/contact" className="btn-primary-gold hidden rounded-xl px-5 py-2.5 text-sm font-semibold md:inline-flex">
            Contact
          </NavLink>

          <button className="md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[#001F3F]/5 glass-nav px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={linkClasses}>
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/contact" onClick={() => setOpen(false)} className="btn-primary-gold mt-2 inline-flex justify-center rounded-xl px-4 py-2.5 text-sm font-semibold">
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* ── Main Content ─────────────────────────────────────── */}
      <main>
        <Outlet />
      </main>

      {/* ── Premium Footer ───────────────────────────────────── */}
      <footer className="border-t border-[#001F3F]/5 bg-[#001F3F] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
          <div className="grid gap-12 text-center md:text-left lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mx-auto h-14 w-60 overflow-hidden rounded-md md:mx-0 md:h-16 md:w-72">
                <img src="/images/main_logo.PNG" alt="Zyvox Automations" className="h-full w-full object-contain brightness-0 invert" />
              </div>
              <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-white/40 md:mx-0">
                AI-powered infrastructure that scales mid-market enterprises across India and Australia.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Explore</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/50">
                <li><NavLink to="/services" className="transition-colors hover:text-white">Services</NavLink></li>
                <li><NavLink to="/testimonials" className="transition-colors hover:text-white">Testimonials</NavLink></li>
                <li><NavLink to="/about" className="transition-colors hover:text-white">About</NavLink></li>
                <li><NavLink to="/contact" className="transition-colors hover:text-white">Contact</NavLink></li>
              </ul>
            </div>

            {/* Entity Details */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Entity Details</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/50">
                <li className="flex items-center justify-center gap-2 md:justify-start">
                  <span className="text-white/30">Entity:</span>
                  <span className="text-white/60">Zyvox Automations</span>
                </li>
                <li className="flex items-center justify-center gap-2 md:justify-start">
                  <span className="text-white/30">Type:</span>
                  <span className="text-white/60">Sole Proprietorship</span>
                </li>
                <li className="flex items-center justify-center gap-2 md:justify-start">
                  <span className="text-white/30">UDYAM:</span>
                  <span className="font-mono text-xs text-white/60">UDYAM-UD-56-0161699</span>
                </li>
                <li className="flex items-center justify-center gap-2 md:justify-start">
                  <span className="text-white/30">Markets:</span>
                  <span className="text-white/60">India & Australia</span>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Connect</h3>
              <div className="mt-5 inline-flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/zyvox-ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-all hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hello@zyvoxautomations.com"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-all hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="tel:+10000000000"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-all hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <span className="font-sans text-xs text-white/25">
              © {new Date().getFullYear()} Zyvox Automations. All rights reserved.
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/15">
              Enterprise Infrastructure · India & Australia
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteShell;