import useReveal from '../hooks/useReveal.js';

export default function Closing() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`closing reveal${visible ? ' visible' : ''}`}>
      <p className="eyebrow">THERE IS ALWAYS MORE TO THE STORY</p>
      <h2>
        Follow your <em>curiosity.</em>
      </h2>
      <a className="button" href="#books">
        Find your next read <span>↑</span>
      </a>
    </section>
  );
}
