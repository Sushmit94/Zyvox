import { Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "About", to: "/about" },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `nav-link text-sm font-semibold transition-colors ${isActive ? "nav-link-active text-brand-navy" : "text-muted-foreground hover:text-foreground"}`;

const SiteShell = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between md:h-20">
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

          <NavLink to="/contact" className="btn-pop hidden rounded-lg bg-brand-navy px-4 py-2 text-sm font-semibold text-primary-foreground md:inline-flex">
            Contact
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
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border bg-secondary/80 py-14">
        <div className="container grid gap-10 text-center md:text-left lg:grid-cols-3">
          <div>
            <div className="mx-auto h-14 w-60 overflow-hidden rounded-md md:mx-0 md:h-16 md:w-72">
              <img src="/images/main_logo.PNG" alt="Zyvox Automations" className="h-full w-full object-contain" />
            </div>
            <p className="mx-auto mt-4 max-w-xs text-sm text-muted-foreground md:mx-0">
              We build business-grade communication workflows that improve response quality, speed, and conversion.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-brand-navy">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><NavLink to="/services" className="hover:text-foreground">Services</NavLink></li>
              <li><NavLink to="/testimonials" className="hover:text-foreground">Testimonials</NavLink></li>
              <li><NavLink to="/about" className="hover:text-foreground">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-foreground">Contact</NavLink></li>
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-brand-navy">Reach Us</h3>
            <div className="mt-4 inline-flex items-center gap-4 rounded-md bg-brand-navy px-4 py-3 text-primary-foreground">
              <a
                href="https://www.linkedin.com/company/zyvox-ai/"
                target="_blank"
                rel="noreferrer"
                className="opacity-90 transition-opacity hover:opacity-100"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:hello@zyvoxautomations.com" className="opacity-90 transition-opacity hover:opacity-100" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+10000000000" className="opacity-90 transition-opacity hover:opacity-100" aria-label="Phone">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          
          </div>

        </div>

       <div className="container mt-10 border-t border-border pt-6 text-sm text-muted-foreground flex items-center justify-between">
  <span>© {new Date().getFullYear()} Zyvox Automations. All rights reserved.</span>
  <span>Contact for Pricing</span>
</div>
      </footer>
    </div>
  );
};

export default SiteShell;
