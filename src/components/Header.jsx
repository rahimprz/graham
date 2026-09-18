export default function Header() {
  return (
    <header>
      <a className="brand" href="#home">
        Graham Satchwell
        <span>AUTHOR &amp; FORMER DETECTIVE</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#books">The books</a>
        <a href="#author">The author</a>
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
