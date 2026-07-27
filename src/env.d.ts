/// <reference types="astro/client" />

// Fontsource ships CSS-only packages with no bundled type declarations, so a
// bare side-effect import (which is all we want — the stylesheet) trips
// ts(2882). Declaring the namespace keeps `astro check` honest about the rest.
declare module '@fontsource-variable/*';
