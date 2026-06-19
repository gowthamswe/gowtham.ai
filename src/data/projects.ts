export interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: 'VideoVitals — Chrome Extension',
    year: '2026',
    description:
      'Surfaces clickbait flags and information-density ratings on YouTube videos, with community averages. Serverless: Firestore via REST (no SDK), MV3 service worker, Google OAuth.',
    tags: ['Chrome MV3', 'Firestore', 'OAuth', 'JavaScript'],
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/videovitals/glhnmjfkckhhohdomkfkojdhimpncnaj',
      },
      { label: 'GitHub', href: 'https://github.com/gowthamswe/video-vitals' },
    ],
  },
];
