import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Divider from './components/Divider.jsx';
import BookCollection from './components/BookCollection.jsx';
import Author from './components/Author.jsx';
import Closing from './components/Closing.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#books">
        Skip to books
      </a>
      <Header />
      <main>
        <Hero />
        <Divider />
        <BookCollection />
        <Author />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
