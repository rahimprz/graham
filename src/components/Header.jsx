import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'books', 'author', 'case-files'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targets = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <a className="brand" href="#home">
        Graham Satchwell
        <span>AUTHOR &amp; FORMER DETECTIVE</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#books" className={active === 'books' ? 'active' : ''}>
          The books
        </a>
        <a href="#author" className={active === 'author' ? 'active' : ''}>
          The author
        </a>
        <a href="#case-files" className={active === 'case-files' ? 'active' : ''}>
          Case files
        </a>
        <a
          href="https://www.amazon.co.uk/stores/author/B0034O51US"
          target="_blank"
          rel="noopener"
          className="nav-shop"
        >
          Find on Amazon <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
