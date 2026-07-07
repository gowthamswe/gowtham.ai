export interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: 'Kāra — Programming Language & Compiler',
    year: '2026',
    description:
      'A compiled, auto-parallelizing systems language built end-to-end — lexer through native LLVM and WebAssembly codegen. Rust-style ownership/borrow checking with no lifetime annotations, an effect system that infers reads/writes and auto-parallelizes independent work, generics via monomorphization, and 10,000+ tests with ASan/LeakSanitizer leak gates on every build.',
    tags: ['Rust', 'LLVM', 'WebAssembly', 'Compilers'],
    links: [
      { label: 'karac.dev', href: 'https://karac.dev' },
      { label: 'GitHub', href: 'https://github.com/karalang/kara' },
    ],
  },
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
  {
    name: 'Simple Todo — Chrome Extension',
    year: '2026',
    description:
      'A lightweight browser-action todo popup built on Manifest V3. Drag-and-drop task reordering, light/dark themes and adjustable text size, all persisted locally through chrome.storage — no backend, no dependencies.',
    tags: ['Chrome MV3', 'JavaScript', 'chrome.storage'],
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/simple-todo-popup/paepbcgpkkeboklgnhnpaccoogpdllbf',
      },
      { label: 'GitHub', href: 'https://github.com/gowthamswe/simple-todo-plugin' },
    ],
  },
];
