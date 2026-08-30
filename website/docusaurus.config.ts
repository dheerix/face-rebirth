import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const DEMO_BOOKING_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf01v6t0XaYaOEqM1dke80CMLNWVo4vgvetd7_OalZOdrISFQ/viewform?usp=publish-editor';

const config: Config = {
  title: 'Face Rebirth',
  tagline: 'Rediscover the Face You Love.',
  favicon: 'img/brand/face-rebirth-logo-primary.png',
  future: {v4: true},
  url: 'https://facerebirth.com',
  baseUrl: '/',
  organizationName: 'dheerix',
  projectName: 'face-rebirth',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  headTags: [{tagName: 'link', attributes: {rel: 'canonical', href: 'https://facerebirth.com/'}}],
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [[
    'classic',
    {
      docs: {
        path: '../docs',
        routeBasePath: 'docs',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/dheerix/face-rebirth/edit/main/docs/',
      },
      blog: {
        showReadingTime: true,
        blogTitle: 'Face Rebirth Journal',
        blogDescription: 'Practical education for a calmer, brighter, more connected face.',
        feedOptions: {type: ['rss', 'atom'], xslt: true},
        editUrl: 'https://github.com/dheerix/face-rebirth/edit/main/website/blog/',
        onInlineTags: 'warn', onInlineAuthors: 'warn', onUntruncatedBlogPosts: 'ignore',
      },
      theme: {customCss: './src/css/custom.css'},
    } satisfies Preset.Options,
  ]],
  themeConfig: {
    image: 'img/brand/face-rebirth-logo-primary.png',
    metadata: [
      {name: 'keywords', content: 'facial wellness, jaw tension, lymphatic drainage, face yoga, nervous system'},
      {name: 'description', content: 'A holistic neuro-lymphatic face wellness method combining facial release, mindful movement and nervous-system care.'},
      {property: 'og:title', content: 'Face Rebirth™ | Rediscover the Face You Love'},
      {property: 'og:description', content: 'A holistic neuro-lymphatic face wellness method combining facial release, mindful movement and nervous-system care.'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://facerebirth.com/'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Face Rebirth™ | Rediscover the Face You Love'},
      {name: 'twitter:description', content: 'A holistic neuro-lymphatic face wellness method combining facial release, mindful movement and nervous-system care.'},
      {name: 'theme-color', content: '#F8F5F1'},
    ],
    colorMode: {defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false},
    navbar: {
      title: 'FACE REBIRTH™',
      logo: {alt: 'Face Rebirth', src: 'img/brand/face-rebirth-logo-primary.png'},
      hideOnScroll: false,
      items: [
        {href: 'https://facerebirth.com/#why', label: 'Why Face Rebirth', position: 'left'},
        {href: 'https://facerebirth.com/#method', label: 'The Method', position: 'left'},
        {href: 'https://facerebirth.com/#program', label: '21-Day Reset', position: 'left'},
        {href: 'https://facerebirth.com/#founder', label: 'Meet the Founder', position: 'left'},
        {to: '/resources', label: 'Resources', position: 'left'},
        {href: DEMO_BOOKING_URL, label: 'Book Your Demo', position: 'right', className: 'navbar-cta'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'FACE REBIRTH™', items: [{label: 'Rediscover the Face You Love.', to: '/'}]},
        {title: 'Explore', items: [{label: 'The Method', href: 'https://facerebirth.com/#method'}, {label: '21-Day Reset', href: 'https://facerebirth.com/#program'}, {label: 'Free Resources', to: '/resources'}]},
        {title: 'Learn', items: [{label: 'Brand Philosophy', href: 'https://facerebirth.com/#why'}, {label: 'Documentation', to: '/docs/welcome'}]},
        {title: 'Connect', items: [{label: 'Book Your Demo', href: DEMO_BOOKING_URL}, {label: 'Instagram — Coming Soon', href: 'https://facerebirth.com/#waitlist'}, {label: 'Discovery Call — Coming Soon', href: 'https://facerebirth.com/#call'}]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Face Rebirth™. Educational content only. Face Rebirth does not provide medical diagnosis or treatment.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
