import useReveal from '../hooks/useReveal.js';

export default function Author() {
  const art = useReveal();
  const copy = useReveal();

  return (
    <section className="author" id="author">
      <div ref={art.ref} className={`author-art reveal${art.visible ? ' visible' : ''}`}>
        <span className="eyebrow">BEHIND THE BOOKS</span>
        <div className="initials">
          GS<span>.</span>
        </div>
        <div className="author-years">
          <span>1968 — 1999</span>
          <span>BRITISH TRANSPORT POLICE</span>
        </div>
      </div>
      <div ref={copy.ref} className={`author-copy reveal${copy.visible ? ' visible' : ''}`}>
        <p className="eyebrow">02 / THE AUTHOR</p>
        <h2>
          First, a detective.
          <br />
          Always, <em>curious.</em>
        </h2>
        <p>
          Graham Satchwell served in the British Transport Police from 1968 to 1999, rising to
          detective superintendent and working through every rank of its Criminal Investigation
          Department.
        </p>
        <p>
          His books bring that experience to the page: the people behind the cases, the workings
          of police culture, and the questions that remain long after an investigation ends.
        </p>
        <a
          className="text-link"
          href="https://www.amazon.co.uk/stores/author/B0034O51US"
          target="_blank"
          rel="noopener"
        >
          Meet Graham on Amazon <span>↗</span>
        </a>
      </div>
    </section>
  );
}
