'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  ['/about', 'About'], ['/our-story', 'Our Story'], ['/services', 'Services'],
  ['/team', 'Team'], ['/gallery', 'Gallery'], ['/reviews', 'Reviews'], ['/contact', 'Contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);

  return <header className="site-header">
    <div className="header-inner container">
      <Link href="/" className="brand" aria-label="Eleos home">
        <span className="brand-mark" aria-hidden="true">e</span>
        <span><strong>eleos</strong><small>WELLNESS &amp; REHABILITATION</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <a className="header-contact" href="https://wa.me/254711143210" target="_blank" rel="noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
        {open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}
      </button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      {links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href="tel:+254711143210">Call +254 711 143210</a>
    </nav>
  </header>;
}
