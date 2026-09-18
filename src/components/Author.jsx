import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import grahamPhoto from '../assets/graham-satchwell.jpg';

export default function Author() {
  const art = useReveal();
  const copy = useReveal();
  const headingRef = useScrollReveal();
  const photoRef = useRef(null);

  useEffect(() => {
    const node = photoRef.current;
    if (!node) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    gsap.fromTo(
      node,
      { scale: 1.15, y: -18 },
      {
        scale: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: { trigger: node, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === node && t.kill());
  }, []);

  return (
    <section className="author" id="author">
      <div ref={art.ref} className={`portrait reveal${art.visible ? ' visible' : ''}`}>
        <div className="portrait-frame">
          <figure>
            <img ref={photoRef} src={grahamPhoto} alt="Portrait of Graham Satchwell" loading="lazy" />
          </figure>
          <div className="portrait-caption">
            <strong>Graham Satchwell</strong>
            <span>BTP CID, 1968–99</span>
          </div>
        </div>
        <ul className="credentials">
          <li>
            <b>Rank</b>
            <span>Detective Superintendent — every CID rank in a 31-year career</span>
          </li>
          <li>
            <b>Commended by</b>
            <span>HM judges, chief constables, the DPP and the Lord Lieutenant of London</span>
          </li>
        </ul>
      </div>
      <div ref={copy.ref} className={`author-copy reveal${copy.visible ? ' visible' : ''}`}>
        <h2 ref={headingRef}>
          First, a detective.
          <br />
          Always, <em>curious.</em>
        </h2>
        <p>
          Born into a working-class family in inner-city Birmingham, Graham Satchwell was
          diagnosed with a serious illness at the age of seven — a condition that should
          have kept him out of the police force altogether. He talked his way past the
          entrance exam anyway, and joined the British Transport Police in 1968 as an
          eighteen-year-old labourer.
        </p>
        <p>
          Over the next thirty-one years he rose through every rank of its Criminal
          Investigation Department, becoming Britain&rsquo;s most senior railway detective.
          His casework ran from organised crime and terrorism to petty theft, bomb threats,
          the odd politician — and, once, the Queen.
        </p>
        <p>
          Since retiring in 1999 he has turned that career into print: memoir, investigative
          history, and a novel written with a real Great Train Robber looking over his
          shoulder. His books bring the work back to the page — the people behind the cases,
          the culture inside the force, and the questions that outlast every investigation.
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
