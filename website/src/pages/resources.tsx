import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './resources.module.css';

const guides = [
  ['Morning Face Reset','A gentle sequence to release overnight tension and begin with a calmer expression.','7-minute guide'],
  ['5 Minute Routine','Five focused minutes for the jaw, cheeks, brow, neck, and breath.','Quick routine'],
  ['Stress Face Checklist','Notice the facial and postural patterns that may appear when your system is under strain.','Printable checklist'],
  ['Neck Mobility Guide','Simple, comfortable mobility practices that support ease through the neck and jaw.','Movement guide'],
  ['Face Rebirth Journal','A 21-day place to record habits, sensations, energy, and visible changes.','Guided journal'],
];

export default function Resources():ReactNode {
  return <Layout title="Free Resources" description="Free Face Rebirth guides for facial release, neck mobility, and mindful daily practice.">
    <main className={styles.page}>
      <header><p>THE FACE REBIRTH LIBRARY</p><Heading as="h1">A gentler way<br/>to begin.</Heading><span>Choose a free guide and take the first small step toward a calmer, more connected daily ritual.</span></header>
      <section className={styles.grid}>{guides.map(([title,copy,type],i)=><article key={title}><span>0{i+1} · {type}</span><Heading as="h2">{title}</Heading><p>{copy}</p><form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"><input type="hidden" name="resource" value={title}/><label className="sr-only" htmlFor={`email-${i}`}>Email address</label><input id={`email-${i}`} name="email" type="email" placeholder="Email address" required/><button type="submit">Send it to me</button></form></article>)}</section>
      <aside><strong>A thoughtful note:</strong> These guides provide general education and are not medical advice. Stop any practice that causes pain, dizziness, or discomfort and consult an appropriate health professional.</aside>
    </main>
  </Layout>;
}
