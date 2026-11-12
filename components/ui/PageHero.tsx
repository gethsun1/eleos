import React from 'react';

export function PageHero({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="container"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="page-hero-copy">{copy}</p></div></section>;
}
