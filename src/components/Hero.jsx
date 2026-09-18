import { motion } from 'framer-motion';

const eyebrowVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-lines" aria-hidden="true" />
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          variants={eyebrowVariants}
          custom={0.05}
          initial="hidden"
          animate="show"
        >
          <span className="line" /> A LIFE ON BOTH SIDES OF THE STORY
        </motion.p>
        <motion.h1 variants={eyebrowVariants} custom={0.15} initial="hidden" animate="show">
          Truth has a
          <br />
          story to <em>tell.</em>
        </motion.h1>
        <motion.p className="intro" variants={eyebrowVariants} custom={0.25} initial="hidden" animate="show">
          Beyond the headlines. Behind the investigations.
          <br />
          Step into the world of Graham Satchwell.
        </motion.p>
        <motion.a
          className="button"
          href="#books"
          variants={eyebrowVariants}
          custom={0.35}
          initial="hidden"
          animate="show"
        >
          Explore the books <span>↓</span>
        </motion.a>
        <motion.div
          className="hero-note"
          variants={eyebrowVariants}
          custom={0.45}
          initial="hidden"
          animate="show"
        >
          <span>TRUE CRIME</span>
          <span>MEMOIR</span>
          <span>HISTORY</span>
        </motion.div>
      </div>
      <motion.div
        className="hero-books"
        aria-label="Featured books"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="archive-tag">FROM THE CASE FILES</span>
        <motion.a
          href="#confidential"
          className="floating-book back-book"
          whileHover={{ y: -14, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        >
          <img
            src="https://thehistorypress.co.uk/wp-content/uploads/2026/09/9780750992329_cover-wpv_360x.jpg"
            alt="Great Train Robbery Confidential book cover"
            width="280"
            height="430"
          />
        </motion.a>
        <motion.a
          href="#inspector"
          className="floating-book front-book"
          whileHover={{ y: -14, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        >
          <img
            src="https://thehistorypress.co.uk/wp-content/uploads/2026/09/9780750968348_cover-wpv_360x.jpg"
            alt="An Inspector Recalls book cover"
            width="280"
            height="430"
          />
        </motion.a>
        <div className="book-caption">
          <span>REAL CASES. REAL LIVES.</span>
          <span>THE STORIES THAT REMAIN.</span>
        </div>
      </motion.div>
      <a className="scroll-note" href="#books">
        SCROLL TO DISCOVER <span>↓</span>
      </a>
    </section>
  );
}
