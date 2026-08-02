import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const benefits = [
  ['Release', 'Ease jaw, neck, and facial tension with gentle daily practices.'],
  ['Restore', 'Support circulation, lymphatic flow, and a naturally refreshed appearance.'],
  ['Regulate', 'Pair facial care with calming rituals that help the whole nervous system settle.'],
];

const testimonials = [
  ['“My face looks more rested—and I feel more like myself.”', 'Early program participant'],
  ['“The routine is simple enough to actually do every morning.”', 'Face Rebirth community member'],
  ['“I noticed less jaw tension and a softer expression within days.”', '21-day reset participant'],
];

const resources = [
  ['Morning Face Reset', 'A grounding sequence for brighter, calmer mornings.'],
  ['5 Minute Routine', 'A compact daily ritual for busy days.'],
  ['Stress Face Checklist', 'Spot the patterns your face may be holding.'],
  ['Neck Mobility Guide', 'Gentle movements that support the face from below.'],
  ['Face Rebirth Journal', 'Track your rituals, sensations, and visible shifts.'],
];

export default function Home(): ReactNode {
  return (
    <Layout title="Lift Your Face. Calm Your Mind." description="A gentle 21-day face and nervous-system reset.">
      <main>
        <header className={styles.hero}>
          <div className={styles.orb} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>FACE REBIRTH™</p>
            <Heading as="h1">Lift Your Face.<br />Calm Your Mind.<br /><em>Glow From Within.</em></Heading>
            <p className={styles.heroCopy}>A gentle, guided ritual that brings facial release, mindful movement, and nervous-system care into one transformative daily practice.</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#waitlist">Join the waitlist</a>
              <Link className={styles.textLink} to="/docs/program/06_21_Day_Program_Structure">Explore the program →</Link>
            </div>
          </div>
          <a className={styles.scrollCue} href="#why" aria-label="Scroll to learn more">↓</a>
        </header>

        <section className={styles.section} id="why">
          <p className={styles.kicker}>Why Face Rebirth?</p>
          <Heading as="h2">Your face reflects more than skincare.</Heading>
          <p className={styles.lead}>Stress, posture, breath, sleep, and everyday tension can all shape how your face feels and appears. Face Rebirth approaches them as one connected system.</p>
          <div className={styles.cardGrid}>{benefits.map(([title, copy], i) => <article className={styles.card} key={title}><span>0{i + 1}</span><Heading as="h3">{title}</Heading><p>{copy}</p></article>)}</div>
        </section>

        <section className={styles.program} id="program">
          <div><p className={styles.kicker}>The 21-Day Reset</p><Heading as="h2">Small rituals.<br />A visible shift.</Heading></div>
          <div className={styles.weeks}>
            <article><span>Week 01</span><Heading as="h3">Release</Heading><p>Notice and soften the tension patterns held through the jaw, brow, neck, and breath.</p></article>
            <article><span>Week 02</span><Heading as="h3">Activate</Heading><p>Build a consistent practice for mobility, circulation, and mindful facial movement.</p></article>
            <article><span>Week 03</span><Heading as="h3">Integrate</Heading><p>Turn the reset into a sustainable ritual that fits the rhythm of real life.</p></article>
          </div>
        </section>

        <section className={styles.section} id="stories">
          <p className={styles.kicker}>Community stories</p><Heading as="h2">Feel the difference.<br />See the difference.</Heading>
          <div className={styles.quoteGrid}>{testimonials.map(([quote, person]) => <figure key={quote}><blockquote>{quote}</blockquote><figcaption>{person}</figcaption></figure>)}</div>
          <p className={styles.disclaimer}>Illustrative early-program testimonials. Replace with verified participant feedback before launch.</p>
        </section>

        <section className={styles.founder} id="founder">
          <div className={styles.portrait} aria-label="Founder portrait placeholder"><span>Founder portrait</span></div>
          <div><p className={styles.kicker}>Your guide</p><Heading as="h2">Meet the Founder</Heading><p>Face Rebirth brings together evidence-aware education, gentle facial practice, and whole-person wellbeing. Add the founder’s name, credentials, story, and clinical philosophy here.</p><a className={styles.textLink} href="#call">Discover the philosophy →</a></div>
        </section>

        <section className={styles.callout} id="call">
          <p className={styles.kicker}>A personal beginning</p><Heading as="h2">Not sure where to start?</Heading><p>Book a discovery call to explore your goals and whether Face Rebirth is right for you.</p><a className={styles.lightButton} href="mailto:hello@example.com?subject=Face%20Rebirth%20Discovery%20Call">Book a discovery call</a>
        </section>

        <section className={styles.section} id="resources">
          <p className={styles.kicker}>Free resources</p><Heading as="h2">Start your reset today.</Heading>
          <div className={styles.resourceGrid}>{resources.map(([title, copy]) => <Link to="/resources" key={title}><Heading as="h3">{title}</Heading><p>{copy}</p><span>Download →</span></Link>)}</div>
        </section>

        <section className={styles.waitlist} id="waitlist">
          <p className={styles.eyebrow}>FACE REBIRTH™</p><Heading as="h2">Be first to begin.</Heading><p>Join the waitlist for launch news, guided practices, and early access.</p>
          <form className={styles.form} action="https://formspree.io/f/YOUR_FORM_ID" method="POST"><label className="sr-only" htmlFor="waitlist-email">Email address</label><input id="waitlist-email" name="email" type="email" placeholder="Your email address" required /><button type="submit">Join waitlist</button></form>
          <small>Replace <code>YOUR_FORM_ID</code> with your Formspree form ID before launch.</small>
        </section>
      </main>
    </Layout>
  );
}
