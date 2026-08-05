import type {FormEvent, ReactNode} from 'react';
import {useState} from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BrandLogo from '../components/BrandLogo';
import styles from './index.module.css';

const FORMSPREE_ENDPOINT = '';
const DISCOVERY_CALL_URL = '';

const pillars = [
  ['Release', 'Ease tension held through the jaw, brow, neck and facial muscles.'],
  ['Restore', 'Support mindful movement, circulation and healthy lymphatic flow.'],
  ['Regulate', 'Pair facial practices with calming rituals that support the nervous system.'],
];

const methodCards = [
  ['img/method/general-body-wakeup.png', 'General Body Wake-Up', 'Gentle movement awakens the body, encourages mobility and brings awareness to posture before facial practice begins.'],
  ['img/method/facial-release.png', 'Facial Release', 'Mindful facial exercises and release techniques ease areas where everyday stress is commonly held.'],
  // ['img/method/shatkriyas.png', 'Cleansing Through Shatkriyas', 'Carefully guided traditional cleansing practices create a clear, intentional beginning to the ritual.'],
  ['img/method/pranayama.png', 'Neuro-Calming Through Pranayama', 'Pranayama practices for the face and mind help establish a slower, steadier rhythm.'],
  ['img/method/mindfulness.png', 'Mindfulness', 'Notice, connect and integrate.'],
];

function MethodImage({src, title}: {src: string; title: string}): ReactNode {
  return <img className={styles.methodImage} src={useBaseUrl(src)} alt={`${title} illustration`}/>;
}

function MethodDivider(): ReactNode {
  return <div className={styles.methodDivider} aria-hidden="true"><span/><svg viewBox="0 0 40 28" fill="none"><path d="M20 25c-1-9 0-16 0-22 5 5 8 10 7 15 3-3 6-4 10-4-2 7-7 11-17 11Zm0 0c-10 0-15-4-17-11 4 0 7 1 10 4-1-5 2-10 7-15"/></svg><span/></div>;
}

const weeks = [
  ['Week 01', 'Release', 'Notice and soften the patterns held through the jaw, brow, neck, posture and breath.'],
  ['Week 02', 'Activate', 'Introduce mindful facial movement and supportive practices with calm, consistent guidance.'],
  ['Week 03', 'Integrate', 'Turn the reset into a sustainable ritual that fits naturally into everyday life.'],
];

const experiences = [
  ['Simple to Follow', 'Short practices with clear guidance and no complicated equipment.'],
  ['Rooted in Consistency', 'A realistic daily rhythm that values repetition over quick fixes.'],
  ['Created for Real Women', 'Supportive facial wellness for women balancing work, family, stress and changing routines.'],
];

const resources = [
  ['Morning Face Reset', 'A grounding way to notice and soften morning tension.'],
  ['Five-Minute Face Ritual', 'A simple practice designed for a busy day.'],
  ['Stress and Tension Checklist', 'Notice the everyday patterns your face may be holding.'],
  ['Neck Mobility Guide', 'Gentle movement to bring awareness to the face, neck and posture.'],
  ['Face Rebirth Journal', 'A place to reflect on rituals, sensations and consistency.'],
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'unavailable';

export default function Home(): ReactNode {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  async function submitWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      if (process.env.NODE_ENV !== 'production') console.warn('Face Rebirth waitlist endpoint is not configured.');
      setFormStatus('unavailable');
      return;
    }
    setFormStatus('loading');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST', body: new FormData(event.currentTarget), headers: {Accept: 'application/json'},
      });
      if (!response.ok) throw new Error('Waitlist submission failed');
      event.currentTarget.reset();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  }

  return (
    <Layout title="Face Rebirth™ | Rediscover the Face You Love" description="A holistic neuro-lymphatic face wellness method combining facial release, mindful movement and nervous-system care.">
      <Head><title>Face Rebirth™ | Rediscover the Face You Love</title></Head>
      <main>
        <header className={styles.hero}>
          <div className={styles.heroCopyBlock}>
            <p className={styles.eyebrow}>A holistic neuro-lymphatic face wellness method</p>
            <Heading as="h1">Rediscover the Face You Love.</Heading>
            <p className={styles.heroCopy}>A gentle, guided blend of yogic facial exercises, facial lymphatic drainage, yogic cleansing techniques, pranayama for the face and mind, mudras and mindfulness—created to help you look more rested, feel more balanced and reconnect with your natural radiance.</p>
            <p className={styles.heroNote}>Natural care. Consistent rituals. A face that feels like you again.</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#waitlist">Join the Waitlist</a>
              <a className={styles.secondaryButton} href="#method">Explore the Method</a>
            </div>
          </div>
          <div className={styles.heroBrand}><BrandLogo className={styles.heroLogo} priority /></div>
        </header>

        <section className={styles.section} id="why">
          <p className={styles.kicker}>Why Face Rebirth?</p>
          <Heading as="h2">Your face reflects how life feels.</Heading>
          <p className={styles.lead}>Stress, posture, sleep, breath, jaw tension and everyday habits can influence how the face looks and feels. Face Rebirth approaches facial wellness as part of one connected system—not as another quick beauty fix.</p>
          <div className={styles.cardGrid}>{pillars.map(([title, copy], index) => <article className={styles.card} key={title}><span className={styles.lineIcon} aria-hidden="true">0{index + 1}</span><Heading as="h3">{title}</Heading><p>{copy}</p></article>)}</div>
        </section>

        <section className={`${styles.section} ${styles.method}`} id="method">
          <p className={styles.kicker}>The Method</p><Heading as="h2">More than facial exercise.</Heading>
          <p className={styles.lead}>Face Rebirth combines gentle facial practices with breath, posture awareness, neck mobility and nervous-system regulation. Each element is designed to work together as a realistic daily ritual.</p>
          <div className={styles.methodGrid}>{methodCards.map(([image, title, copy], index) => <article key={title}><MethodImage src={image} title={title}/><span className={styles.methodNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><Heading as="h3">{title}</Heading><MethodDivider/><p>{copy}</p></article>)}</div>
        </section>

        <section className={styles.program} id="program">
          <div className={styles.programIntro}><p className={styles.kicker}>The Signature Program</p><Heading as="h2">The Face Rebirth 21-Day Reset</Heading><p>A guided three-week experience to help you release habitual facial tension, build a consistent wellness ritual and reconnect with a more rested, expressive version of yourself.</p><a className={styles.lightButton} href="#waitlist">Join the 21-Day Reset Waitlist</a></div>
          <div className={styles.weeks}>{weeks.map(([week, title, copy]) => <article key={week}><span>{week}</span><Heading as="h3">{title}</Heading><p>{copy}</p></article>)}</div>
        </section>

        <section className={styles.section} id="experience">
          <p className={styles.kicker}>The Experience</p><Heading as="h2">Designed to feel gentle, grounded and achievable.</Heading>
          {/* TODO: Replace experience cards with verified participant testimonials when written consent is available. */}
          <div className={styles.cardGrid}>{experiences.map(([title, copy], index) => <article className={styles.card} key={title}><span className={styles.lineIcon} aria-hidden="true">0{index + 1}</span><Heading as="h3">{title}</Heading><p>{copy}</p></article>)}</div>
        </section>

        <section className={styles.founder} id="founder">
          <div className={styles.portrait} role="img" aria-label="Founder portrait placeholder"><span>Founder portrait coming soon</span></div>
          <div><p className={styles.kicker}>Your Guide</p><Heading as="h2">Meet the Founder</Heading>
            {/* TODO: Replace temporary founder copy with founder-approved biography and credentials. */}
            <p>Face Rebirth was created by a dentist, model and experienced facial wellness practitioner who brings together anatomical awareness, years of personal practice and a deep understanding of how confidence and wellbeing are reflected through the face.</p><p>Her approach is gentle, educational and grounded in helping women care for their faces without pressure to become someone else.</p>
            <div className={styles.founderDetails}><strong>Founder profile coming soon</strong><span>Full name · Credentials · Years of practice · Portrait · Origin story</span></div>
            <a className={styles.secondaryButton} href="#why">Discover Her Philosophy</a>
          </div>
        </section>

        <section className={styles.callout} id="call">
          <p className={styles.kicker}>A Personal Beginning</p><Heading as="h2">Not sure where to begin?</Heading><p>A short discovery conversation can help you understand the Face Rebirth approach, explore your goals and decide whether the 21-Day Reset is a suitable next step.</p>
          {DISCOVERY_CALL_URL ? <a className={styles.lightButton} href={DISCOVERY_CALL_URL}>Book a Discovery Call</a> : <button className={styles.lightButton} type="button" disabled>Discovery Calls Coming Soon</button>}
        </section>

        <section className={styles.section} id="resources">
          <p className={styles.kicker}>Free Resources</p><Heading as="h2">Begin with one gentle ritual.</Heading><p className={styles.lead}>Explore practical guides designed to help you notice tension, create calm and begin caring for your face more intentionally.</p>
          <div className={styles.resourceGrid}>{resources.map(([title, copy]) => <article key={title}><Heading as="h3">{title}</Heading><p>{copy}</p><span>Coming Soon</span></article>)}</div>
        </section>

        <section className={styles.waitlist} id="waitlist">
          <p className={styles.wordmark}>FACE REBIRTH™</p><Heading as="h2">Rediscover the Face You Love.</Heading><p>Join the waitlist for launch updates, introductory practices and early access to the Face Rebirth 21-Day Reset.</p>
          <form className={styles.form} onSubmit={submitWaitlist} noValidate>
            <div><label htmlFor="waitlist-name">First name</label><input id="waitlist-name" name="name" type="text" autoComplete="given-name" required /></div>
            <div><label htmlFor="waitlist-email">Email address</label><input id="waitlist-email" name="email" type="email" autoComplete="email" required /></div>
            <button type="submit" disabled={formStatus === 'loading'}>{formStatus === 'loading' ? 'Joining…' : 'Join the Waitlist'}</button>
          </form>
          <div className={styles.formMessage} role="status" aria-live="polite">
            {formStatus === 'success' && 'Thank you. You’re on the Face Rebirth waitlist.'}
            {formStatus === 'error' && 'Something went wrong. Please try again shortly.'}
            {formStatus === 'unavailable' && 'The waitlist is opening soon. Please check back shortly.'}
          </div>
          <small>No spam. Only Face Rebirth updates and early-access information.</small>
        </section>
      </main>
    </Layout>
  );
}
