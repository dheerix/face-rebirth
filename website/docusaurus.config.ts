import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Face Rebirth',
  tagline: 'Lift Your Face. Calm Your Mind. Glow From Within.',
  favicon: 'img/favicon.ico',
  future: {v4: true},
  url: 'https://dheerix.github.io',
  baseUrl: '/face-rebirth/',
  organizationName: 'dheerix',
  projectName: 'face-rebirth',
  trailingSlash: false,
  onBrokenLinks: 'throw',
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
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'facial wellness, jaw tension, lymphatic drainage, face yoga, nervous system'},
      {name: 'theme-color', content: '#f5efe7'},
    ],
    colorMode: {defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false},
    navbar: {
      title: 'FACE REBIRTH™',
      hideOnScroll: true,
      items: [
        {href: 'https://dheerix.github.io/face-rebirth/#program', label: 'The Program', position: 'left'},
        {type: 'docSidebar', sidebarId: 'mainSidebar', label: 'Documentation', position: 'left'},
        {to: '/blog', label: 'Journal', position: 'left'},
        {to: '/resources', label: 'Resources', position: 'left'},
        {href: 'https://dheerix.github.io/face-rebirth/#waitlist', label: 'Join Waitlist', position: 'right', className: 'navbar-cta'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Explore', items: [{label: '21-Day Program', to: '/docs/program/06_21_Day_Program_Structure'}, {label: 'Journal', to: '/blog'}, {label: 'Free Resources', to: '/resources'}]},
        {title: 'Learn', items: [{label: 'Documentation', to: '/docs/welcome'}, {label: 'Brand', to: '/docs/brand/Brand_Positioning'}, {label: 'Operations', to: '/docs/operations/SOPs_and_Daily_Operations'}]},
        {title: 'Connect', items: [{label: 'Join the Waitlist', href: 'https://dheerix.github.io/face-rebirth/#waitlist'}, {label: 'GitHub', href: 'https://github.com/dheerix/face-rebirth'}]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Face Rebirth™. Educational content only; not medical advice.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
