import { motion } from 'framer-motion';
import books from '../data/books.json';
import useReveal from '../hooks/useReveal.js';

function BookRow({ book, index }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      className="book-row"
      id={book.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        className="book-display"
        href={book.url}
        target="_blank"
        rel="noopener"
        aria-label={`Explore ${book.title}`}
      >
        <span className="book-number">
          {number} / GRAHAM SATCHWELL
        </span>
        <img
          src={book.cover}
          alt={`${book.title} book cover`}
          width="240"
          height="350"
          loading="lazy"
        />
      </a>
      <div className="book-info">
        <p className="eyebrow">{book.category}</p>
        <h3>{book.title}</h3>
        <p className="subtitle">{book.subtitle}</p>
        <p className="description">{book.description}</p>
        <a className="text-link" href={book.url} target="_blank" rel="noopener">
          {book.link}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
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
        <div>
          <p className="eyebrow">01 / THE BOOKS</p>
          <h2>
            Look a little <em>closer.</em>
          </h2>
        </div>
        <p>
          Notorious crimes. Hidden truths.
          <br />
          Extraordinary lives behind the headlines.
        </p>
      </div>
      <div id="book-list">
        {books.map((book, index) => (
          <BookRow key={book.id} book={book} index={index} />
        ))}
      </div>
    </section>
  );
}
