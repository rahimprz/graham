import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import heroPoster from '../assets/hero-train-poster.jpg';
import { gsap, ScrollTrigger } from '../lib/gsap.js';

const eyebrowVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const heroRef = useRef(null);
  const videoWrapRef = useRef(null);
  const booksRef = useRef(null);
  const copyRef = useRef(null);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(query.matches);
    const listener = (event) => setReduceMotion(event.matches);
    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    tl.to(videoWrapRef.current, { yPercent: 18, ease: 'none' }, 0);
    tl.to(booksRef.current, { yPercent: -12, ease: 'none' }, 0);
    tl.to(copyRef.current, { yPercent: -8, opacity: 0.25, ease: 'none' }, 0);

    return () => tl.scrollTrigger?.kill();
  }, [reduceMotion]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-video-wrap" ref={videoWrapRef}>
        {reduceMotion ? (
          <img className="hero-video" src={heroPoster} alt="" aria-hidden="true" />
        ) : (
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster={heroPoster}
            aria-hidden="true"
          >
            <source src="/video/hero-train.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-lines" aria-hidden="true" />
      <div className="hero-copy" ref={copyRef}>
        <motion.h1 variants={eyebrowVariants} custom={0.05} initial="hidden" animate="show">
          Truth has a
          <br />
          story to <em>tell.</em>
        </motion.h1>
        <motion.p className="intro" variants={eyebrowVariants} custom={0.2} initial="hidden" animate="show">
          Thirty-one years inside British Transport Police CID, told by the detective who
          lived it. Beyond the headlines. Behind the investigations.
        </motion.p>
        <motion.a
          className="button"
          href="#books"
          variants={eyebrowVariants}
          custom={0.3}
          initial="hidden"
          animate="show"
        >
          Explore the books <span>↓</span>
        </motion.a>
        <motion.div
          className="hero-note"
          variants={eyebrowVariants}
          custom={0.4}
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
        ref={booksRef}
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
