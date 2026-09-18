import { motion } from 'framer-motion';
import books from '../data/books.json';
import useReveal from '../hooks/useReveal.js';

const TONE = {
  raiders: 'crimson',
  inspector: 'umber',
  rot: 'moss',
  confidential: 'steel',
  'sick-business': 'plum',
};

function BookRow({ book, flipped }) {
  const shortGenre = book.category.split(' · ')[0];

  const cover = (
    <a
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
  const heading = useReveal();

  return (
    <section className="collection" id="books">
      <div
        ref={heading.ref}
        className={`section-heading reveal${heading.visible ? ' visible' : ''}`}
      >
        <h2>
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
