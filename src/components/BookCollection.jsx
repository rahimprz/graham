import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import books from '../data/books.json';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { gsap, ScrollTrigger } from '../lib/gsap.js';

const TONE = {
  raiders: 'crimson',
  inspector: 'umber',
  rot: 'moss',
  confidential: 'steel',
  'sick-business': 'plum',
};

function useCoverParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const img = node?.querySelector('img');
    if (!node || !img) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    gsap.fromTo(
      img,
      { scale: 1.2, y: -24 },
      {
        scale: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: node,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === node && t.kill());
  }, []);

  return ref;
}

function BookRow({ book, flipped }) {
  const shortGenre = book.category.split(' · ')[0];
  const coverRef = useCoverParallax();

  const cover = (
    <a
      ref={coverRef}
      className="book-display"
      href={book.url}
      target="_blank"
      rel="noopener"
      aria-label={`Explore ${book.title}`}
    >
      <span className="book-tab">{shortGenre}</span>
      <img
        src={book.cover}
        alt={`${book.title} book cover`}
        width="240"
        height="350"
        loading="lazy"
      />
    </a>
  );

  const info = (
    <div className="book-info">
      <h3>{book.title}</h3>
      <p className="subtitle">{book.subtitle}</p>
      <p className="description">{book.description}</p>
      <a className="text-link" href={book.url} target="_blank" rel="noopener">
        {book.link}
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );

  return (
    <motion.article
      className="book-row"
      data-tone={TONE[book.id]}
      id={book.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {flipped ? (
        <>
          {info}
          {cover}
        </>
      ) : (
        <>
          {cover}
          {info}
        </>
      )}
    </motion.article>
  );
}

export default function BookCollection() {
  const headingRef = useScrollReveal();

  return (
    <section className="collection" id="books">
      <div className="section-heading">
        <h2 ref={headingRef}>
          Look a little <em>closer.</em>
        </h2>
        <p>
          Five books, five real cases. Notorious crimes and hidden truths, told by the
          detective who worked them.
        </p>
      </div>
      <div id="book-list">
        {books.map((book, index) => (
          <BookRow key={book.id} book={book} flipped={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
