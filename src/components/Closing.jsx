import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Closing() {
  const headingRef = useScrollReveal({ y: 24, blur: 6, scale: 0.98 });

  return (
    <section className="closing">
      <h2 ref={headingRef}>
        Follow your <em>curiosity.</em>
      </h2>
      <a className="button" href="#books">
        Find your next read <span>↑</span>
      </a>
    </section>
  );
}
