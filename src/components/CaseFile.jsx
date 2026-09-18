import { motion } from 'framer-motion';
import useReveal from '../hooks/useReveal.js';

const docket = [
  {
    year: '1968',
    text: 'Talks his way past a police medical that should have barred him, and joins British Transport Police as an unqualified eighteen-year-old labourer.',
  },
  {
    year: '1968–99',
    text: 'Serves in every rank of the CID across a thirty-one-year career: organised crime, terrorism, bomb threats, and cases that reached Parliament — and the Crown.',
  },
  {
    year: '1999',
    text: "Retires as Detective Superintendent, Britain's most senior railway detective, commended by HM judges, chief constables, the Director of Public Prosecutions, and the Lord Lieutenant of London.",
  },
  {
    year: '2019',
    text: "Winston Trew's conviction — one of the wrongfully imprisoned “Oval Four” — is quashed, forty-seven years after the corruption Satchwell later exposed in Rot at the Core.",
  },
  {
    year: '2024',
    text: 'Publishes The Great Train Robbery and The South Coast Raiders, a novel written with the direct input of real Great Train Robber Tom Wisbey.',
  },
];

export default function CaseFile() {
  const head = useReveal();

  return (
    <section className="dossier" id="case-files">
      <div ref={head.ref} className={`dossier-head reveal${head.visible ? ' visible' : ''}`}>
        <h2>
          Every case leaves a <em>file.</em>
        </h2>
        <p>
          Alongside the headline cases, one investigation became a book of its own.
          Working with Winston Trew — one of the wrongly convicted &ldquo;Oval
          Four&rdquo; — Satchwell helped expose the corruption of Detective Sergeant
          Derek Ridgewell, whose fabricated evidence sent innocent men to prison.
        </p>
      </div>
      <div className="dossier-body">
        <ol className="docket">
          {docket.map((entry, index) => (
            <motion.li
              key={entry.year}
              className="docket-entry"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <time>{entry.year}</time>
              <div>
                <p>{entry.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
        <motion.div
          className="pull-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <blockquote>
            &ldquo;No work of non-fiction can explore character and culture like
            fiction.&rdquo;
          </blockquote>
          <cite>Graham Satchwell, on The South Coast Raiders</cite>
        </motion.div>
      </div>
    </section>
  );
}
