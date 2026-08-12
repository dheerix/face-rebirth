import type { FormEvent, ReactNode } from 'react';
import { useState } from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BrandLogo from '../components/BrandLogo';
import styles from './index.module.css';

const FORMSPREE_ENDPOINT = '';
const WHATSAPP_NUMBER = '918894947438';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Neha, I'd like to learn more about Face Rebirth and the 21-Day Reset.")}`;

const pillars = [
	[
		'Release',
		'Ease tension held through the jaw, brow, neck and facial muscles.',
	],
	[
		'Restore',
		'Support mindful movement, circulation and healthy lymphatic flow.',
	],
	[
		'Regulate',
		'Pair facial practices with calming rituals that support the nervous system.',
	],
];

const methodCards = [
	[
		'img/method/general-body-wakeup.png',
		'General Body Wake-Up',
		'Gentle movement awakens the body, encourages mobility and brings awareness to posture before facial practice begins.',
	],
	[
		'img/method/facial-release.png',
		'Facial Release',
		'Mindful facial exercises and release techniques ease areas where everyday stress is commonly held.',
	],
	// ['img/method/shatkriyas.png', 'Cleansing Through Shatkriyas', 'Carefully guided traditional cleansing practices create a clear, intentional beginning to the ritual.'],
	[
		'img/method/pranayama.png',
		'Neuro-Calming Through Pranayama',
		'Pranayama practices for the face and mind help establish a slower, steadier rhythm.',
	],
	[
		'img/method/mindfulness.png',
		'Mindfulness',
		'Notice, connect and integrate.',
	],
];

function MethodImage({
	src,
	title,
}: {
	src: string;
	title: string;
}): ReactNode {
	return (
		<img
			className={styles.methodImage}
			src={useBaseUrl(src)}
			alt={`${title} illustration`}
		/>
	);
}

function MethodDivider(): ReactNode {
	return (
		<div className={styles.methodDivider} aria-hidden='true'>
			<span />
			<svg viewBox='0 0 40 28' fill='none'>
				<path d='M20 25c-1-9 0-16 0-22 5 5 8 10 7 15 3-3 6-4 10-4-2 7-7 11-17 11Zm0 0c-10 0-15-4-17-11 4 0 7 1 10 4-1-5 2-10 7-15' />
			</svg>
			<span />
		</div>
	);
}

const weeks = [
	[
		'Week 01',
		'Release',
		'Notice and soften the patterns held through the jaw, brow, neck, posture and breath.',
	],
	[
		'Week 02',
		'Activate',
		'Introduce mindful facial movement and supportive practices with calm, consistent guidance.',
	],
	[
		'Week 03',
		'Integrate',
		'Turn the reset into a sustainable ritual that fits naturally into everyday life.',
	],
];

const experiences = [
	[
		'Simple to Follow',
		'Short practices with clear guidance and no complicated equipment.',
	],
	[
		'Rooted in Consistency',
		'A realistic daily rhythm that values repetition over quick fixes.',
	],
	[
		'Created for Real Women',
		'Supportive facial wellness for women balancing work, family, stress and changing routines.',
	],
];

const founderJourney = [
	[
		'dentistry',
		'The Doctor',
		'Dentistry',
		'Where science, anatomy and my fascination with the face began.',
	],
	[
		'energy',
		'The Prānic Psychotherapist',
		'Energy · Spirituality · Inner Wellbeing',
		'Exploring how prānic energy, spiritual awareness and our inner state shape the way we carry ourselves.',
	],
	[
		'yoga',
		'The Yogi',
		'Movement · Breath · Awareness',
		"A Master's in Yoga, 200-hour TTC and 50-hour Aerial Yoga TTC deepened my understanding of the body as an interconnected system.",
	],
	[
		'stage',
		'The Woman on Stage',
		'Mrs. India 2018 · Modelling · Acting',
		'A world that taught me about beauty, confidence, appearance and the pressures women quietly carry.',
	],
	[
		'wellness',
		'The Wellness Explorer',
		'Nutrition · Coaching · Entrepreneurship',
		'Years of exploring health beyond a single discipline helped me begin seeing the whole woman.',
	],
	[
		'perspective',
		'The Woman at 44',
		'Experience Becomes Philosophy',
		"Today I don't teach women to fight their age. I help them build a more conscious relationship with themselves.",
	],
];

function JourneyIcon({ name }: { name: string }): ReactNode {
	const props = {
		className: styles.journeyIcon,
		viewBox: '0 0 40 40',
		fill: 'none',
		'aria-hidden': true,
	} as const;
	if (name === 'dentistry')
		return (
			<svg {...props}>
				<path d='M13 6c-5 2-7 8-5 14 2 6 5 14 8 14 2 0 2-7 4-7s2 7 4 7c3 0 6-8 8-14 2-6 0-12-5-14-3-1-5 1-7 1s-4-2-7-1Z' />
				<path d='M16 11c2 1 6 1 8 0' />
			</svg>
		);
	if (name === 'energy')
		return (
			<svg {...props}>
				<circle cx='20' cy='20' r='4' />
				<circle cx='20' cy='20' r='9' strokeDasharray='2 3' />
				<path d='M20 3v5m0 24v5M3 20h5m24 0h5M8 8l4 4m16 16 4 4m0-24-4 4M12 28l-4 4' />
			</svg>
		);
	if (name === 'yoga')
		return (
			<svg {...props}>
				<circle cx='20' cy='8' r='4' />
				<path d='M20 12v12m0-7c-5 1-8 4-10 8m10-8c5 1 8 4 10 8M6 33c5-7 9-9 14-9s9 2 14 9M8 33h24' />
			</svg>
		);
	if (name === 'stage')
		return (
			<svg {...props}>
				<path d='M7 34V10c8-7 18-7 26 0v24M7 12h26M12 34V16h16v18' />
				<path d='M15 8h10M20 4v8' />
			</svg>
		);
	if (name === 'wellness')
		return (
			<svg {...props}>
				<path d='M20 36c-1-12 0-22 0-31 6 6 9 13 8 20 3-4 7-6 11-6-2 10-8 16-19 17Zm0 0C9 35 3 29 1 19c4 0 8 2 11 6-1-7 2-14 8-20' />
			</svg>
		);
	return (
		<svg {...props}>
			<circle cx='20' cy='20' r='13' />
			<path d='M7 21c5-6 9-9 13-9s8 3 13 9M10 26h20M20 3v5' />
		</svg>
	);
}

const resources = [
	[
		'Morning Face Reset',
		'A grounding way to notice and soften morning tension.',
	],
	['Five-Minute Face Ritual', 'A simple practice designed for a busy day.'],
	[
		'Stress and Tension Checklist',
		'Notice the everyday patterns your face may be holding.',
	],
	[
		'Neck Mobility Guide',
		'Gentle movement to bring awareness to the face, neck and posture.',
	],
	[
		'Face Rebirth Journal',
		'A place to reflect on rituals, sensations and consistency.',
	],
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'unavailable';

export default function Home(): ReactNode {
	const [formStatus, setFormStatus] = useState<FormStatus>('idle');

	async function submitWaitlist(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!FORMSPREE_ENDPOINT) {
			if (process.env.NODE_ENV !== 'production')
				console.warn('Face Rebirth waitlist endpoint is not configured.');
			setFormStatus('unavailable');
			return;
		}
		setFormStatus('loading');
		try {
			const response = await fetch(FORMSPREE_ENDPOINT, {
				method: 'POST',
				body: new FormData(event.currentTarget),
				headers: { Accept: 'application/json' },
			});
			if (!response.ok) throw new Error('Waitlist submission failed');
			event.currentTarget.reset();
			setFormStatus('success');
		} catch {
			setFormStatus('error');
		}
	}

	return (
		<Layout
			title='Face Rebirth™ | Rediscover the Face You Love'
			description='A holistic neuro-lymphatic face wellness method combining facial release, mindful movement and nervous-system care.'
		>
			<Head>
				<title>Face Rebirth™ | Rediscover the Face You Love</title>
			</Head>
			<main>
				<header className={styles.hero}>
					<div className={styles.heroCopyBlock}>
						<p className={styles.eyebrow}>
							A holistic neuro-lymphatic face wellness method
						</p>
						<Heading as='h1'>Rediscover the Face You Love.</Heading>
						<p className={styles.heroCopy}>
							A gentle, guided blend of yogic facial exercises, facial lymphatic
							drainage, yogic cleansing techniques, pranayama for the face and
							mind, mudras and mindfulness—created to help you look more rested,
							feel more balanced and reconnect with your natural radiance.
						</p>
						<p className={styles.heroNote}>
							Natural care. Consistent rituals. A face that feels like you
							again.
						</p>
						<div className={styles.actions}>
							<a className={styles.primaryButton} href='#waitlist'>
								Join the Waitlist
							</a>
							<a className={styles.secondaryButton} href='#method'>
								Explore the Method
							</a>
						</div>
					</div>
					<div className={styles.heroBrand}>
						<BrandLogo className={styles.heroLogo} priority />
					</div>
				</header>

				<section className={styles.section} id='why'>
					<p className={styles.kicker}>Why Face Rebirth?</p>
					<Heading as='h2'>Your face reflects how life feels.</Heading>
					<p className={styles.lead}>
						Stress, elevated cortisol levels, posture, sleep, breath, jaw
						tension, female hormonal shifts, inadequate hydration and everyday
						dietary habits can all influence how the face looks and feels. Face
						Rebirth approaches facial wellness as part of one connected
						system—not as another quick beauty fix.
					</p>
					<div className={styles.cardGrid}>
						{pillars.map(([title, copy], index) => (
							<article className={styles.card} key={title}>
								<span className={styles.lineIcon} aria-hidden='true'>
									0{index + 1}
								</span>
								<Heading as='h3'>{title}</Heading>
								<p>{copy}</p>
							</article>
						))}
					</div>
				</section>

				<section className={`${styles.section} ${styles.method}`} id='method'>
					<p className={styles.kicker}>The Method</p>
					<Heading as='h2'>More than facial exercise.</Heading>
					<p className={styles.lead}>
						Face Rebirth combines gentle facial practices with breath, posture
						awareness, neck mobility and nervous-system regulation. Each element
						is designed to work together as a realistic daily ritual.
					</p>
					<div className={styles.methodGrid}>
						{methodCards.map(([image, title, copy], index) => (
							<article key={title}>
								<MethodImage src={image} title={title} />
								<span className={styles.methodNumber} aria-hidden='true'>
									{String(index + 1).padStart(2, '0')}
								</span>
								<Heading as='h3'>{title}</Heading>
								<MethodDivider />
								<p>{copy}</p>
							</article>
						))}
					</div>
				</section>

				<section className={styles.program} id='program'>
					<div className={styles.programIntro}>
						<p className={styles.kicker}>The Signature Program</p>
						<Heading as='h2'>The Face Rebirth 21-Day Reset</Heading>
						<p>
							A guided three-week experience to help you release habitual facial
							tension, build a consistent wellness ritual and reconnect with a
							more rested, expressive version of yourself.
						</p>
						<a className={styles.lightButton} href='#waitlist'>
							Join the 21-Day Reset Waitlist
						</a>
					</div>
					<div className={styles.weeks}>
						{weeks.map(([week, title, copy]) => (
							<article key={week}>
								<span>{week}</span>
								<Heading as='h3'>{title}</Heading>
								<p>{copy}</p>
							</article>
						))}
					</div>
				</section>

				<section className={styles.section} id='experience'>
					<p className={styles.kicker}>The Experience</p>
					<Heading as='h2'>
						Designed to feel gentle, grounded and achievable.
					</Heading>
					{/* TODO: Replace experience cards with verified participant testimonials when written consent is available. */}
					<div className={styles.cardGrid}>
						{experiences.map(([title, copy], index) => (
							<article className={styles.card} key={title}>
								<span className={styles.lineIcon} aria-hidden='true'>
									0{index + 1}
								</span>
								<Heading as='h3'>{title}</Heading>
								<p>{copy}</p>
							</article>
						))}
					</div>
				</section>

				<section className={styles.founder} id='founder'>
					<div className={styles.founderHeader}>
						<p className={styles.kicker}>The Woman Behind the Philosophy</p>
						<Heading as='h2'>Dr. Neha Goel</Heading>
						<p className={styles.credentials}>
							Dentist · Prānic Psychotherapist · Yoga Practitioner · Mrs. India
							2018 · Wellness Mentor
						</p>
						<p className={styles.founderStatement}>
							20+ Years. Many Worlds. One Philosophy.
						</p>
					</div>
					<div
						className={styles.portrait}
						role='img'
						aria-label='Portrait placeholder for Dr. Neha Goel'
					>
						<span>
							Dr. Neha Goel<small>Portrait coming soon</small>
						</span>
					</div>
					<p className={styles.founderBio}>
						My journey has moved through medicine, prānic psychotherapy,
						spirituality, yoga, nutrition, entrepreneurship, pageantry,
						modelling and wellness. What once seemed like different chapters
						eventually revealed one common truth—the way we look and feel is
						deeply connected to the way we live.
					</p>

					<div className={styles.journey}>
						<div className={styles.journeyHeading}>
							<p className={styles.kicker}>My Journey</p>
							<Heading as='h3'>Many Dimensions. One Woman.</Heading>
						</div>
						<ol className={styles.timeline}>
							{founderJourney.map(([icon, dimension, discipline, copy]) => (
								<li key={dimension}>
									<div className={styles.timelineMarker}>
										<JourneyIcon name={icon} />
									</div>
									<p className={styles.timelineDimension}>{dimension}</p>
									<Heading as='h4'>{discipline}</Heading>
									<p>{copy}</p>
								</li>
							))}
						</ol>
					</div>

					<div className={styles.founderPhilosophy} id='philosophy'>
						<blockquote>
							Dentistry taught me anatomy. Prānic psychotherapy taught me about
							energy and the inner self. Yoga taught me awareness. Pageantry
							taught me confidence. Life taught me perspective.
						</blockquote>
						<Heading as='h3'>
							And somewhere along that journey, Face Rebirth™ was born.
						</Heading>
						<p>
							Not as another beauty technique, but as a way of bringing the
							different worlds I had studied, practised and lived into one
							simple philosophy of self-care.
						</p>
						<div className={styles.brandBelief}>
							<p>I am not here to teach women how to fight their age.</p>
							<p>
								I want to help them rediscover the face—and the woman—they love.
							</p>
						</div>
						<a className={styles.secondaryButton} href='#philosophy'>
							Discover My Philosophy <span aria-hidden='true'>→</span>
						</a>
					</div>
				</section>

				<section className={styles.callout} id='call'>
					<p className={styles.kicker}>A Personal Beginning</p>
					<Heading as='h2'>Not sure where to begin?</Heading>
					<p>
						A short discovery conversation can help you understand the Face
						Rebirth approach, explore your goals and decide whether the 21-Day
						Reset is a suitable next step.
					</p>
					<a
						className={`${styles.lightButton} ${styles.whatsappButton}`}
						href={WHATSAPP_URL}
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Chat with Face Rebirth on WhatsApp at +91 88949 47438'
					>
						<img
							className={styles.whatsappIcon}
							src={useBaseUrl('img/icons/whatsapp.png')}
							alt=''
							aria-hidden='true'
						/>
						<span>
							<strong>Chat on WhatsApp</strong>
						</span>
					</a>
				</section>

				<section className={styles.section} id='resources'>
					<p className={styles.kicker}>Free Resources</p>
					<Heading as='h2'>Begin with one gentle ritual.</Heading>
					<p className={styles.lead}>
						Explore practical guides designed to help you notice tension, create
						calm and begin caring for your face more intentionally.
					</p>
					<div className={styles.resourceGrid}>
						{resources.map(([title, copy]) => (
							<article key={title}>
								<Heading as='h3'>{title}</Heading>
								<p>{copy}</p>
								<span>Coming Soon</span>
							</article>
						))}
					</div>
				</section>

				<section className={styles.waitlist} id='waitlist'>
					<p className={styles.wordmark}>FACE REBIRTH™</p>
					<Heading as='h2'>Rediscover the Face You Love.</Heading>
					<p>
						Join the waitlist for launch updates, introductory practices and
						early access to the Face Rebirth 21-Day Reset.
					</p>
					<form className={styles.form} onSubmit={submitWaitlist} noValidate>
						<div>
							<label htmlFor='waitlist-name'>First name</label>
							<input
								id='waitlist-name'
								name='name'
								type='text'
								autoComplete='given-name'
								required
							/>
						</div>
						<div>
							<label htmlFor='waitlist-email'>Email address</label>
							<input
								id='waitlist-email'
								name='email'
								type='email'
								autoComplete='email'
								required
							/>
						</div>
						<button type='submit' disabled={formStatus === 'loading'}>
							{formStatus === 'loading' ? 'Joining…' : 'Join the Waitlist'}
						</button>
					</form>
					<div className={styles.formMessage} role='status' aria-live='polite'>
						{formStatus === 'success' &&
							'Thank you. You’re on the Face Rebirth waitlist.'}
						{formStatus === 'error' &&
							'Something went wrong. Please try again shortly.'}
						{formStatus === 'unavailable' &&
							'The waitlist is opening soon. Please check back shortly.'}
					</div>
					<small>
						No spam. Only Face Rebirth updates and early-access information.
					</small>
				</section>
			</main>
		</Layout>
	);
}
