// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Ngumimi Karen Iyortsuun';
export const SITE_DESCRIPTION =
  'AI researcher building multimodal models for mental-health assessment from EEG, ECG, speech, and language.';

// Put your CV in public/cv.pdf
export const CV_URL = '/cv.pdf';

export const CONTACT = {
  organization: 'Pattern Recognition Laboratory',
  addressLines: [
    'Chonnam National University',
    'Gwangju, South Korea',
  ],
  emails: [
    'kareniyortsuun@gmail.com',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

// TODO: replace the Scholar and LinkedIn URLs with your own profile links
export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/',
    icon: 'scholar',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Symplykaren',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:kareniyortsuun@gmail.com',
    icon: 'email',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Open Source',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};

// Umami analytics — configured via environment variables so no tracking ID is
// committed. Set PUBLIC_UMAMI_WEBSITE_ID (e.g. in a .env file or a CI variable)
// to enable it; leave it unset to disable analytics entirely.
export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
