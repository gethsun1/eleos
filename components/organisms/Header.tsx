'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  ['/about', 'About'], ['/services', 'Services'], ['/training', 'Training'],
  ['/community', 'Community'], ['/gallery', 'Gallery'], ['/contact', 'Contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);

  return <header className="site-header">
    <div className="header-inner container">
      <Link href="/" className="brand" aria-label="Eleos home">
        <Image className="brand-logo" src="/eleos-logo.jpeg" alt="" width={48} height={48} />
        <span><strong>eleos</strong><small>WELLNESS &amp; REHABILITATION</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <div className="header-actions"><a className="header-call" href="tel:+254721877272"><Phone size={15}/> Call Eleos</a><a className="header-contact" href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a></div>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
        {open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}
      </button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      {links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href="tel:+254721877272">Call +254 721 877272</a>
      <a href="https://wa.me/254711143210" target="_blank" rel="noopener noreferrer">WhatsApp +254 711 143210</a>
    </nav>
  </header>;
}
