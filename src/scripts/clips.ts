const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clips = document.querySelectorAll<HTMLVideoElement>('video[data-clip]');

if (prefersReducedMotion) {
  clips.forEach((clip) => {
    clip.controls = true;
  });
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const clip = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          void clip.play().catch(() => undefined);
        } else {
          clip.pause();
        }
      }
    },
    { threshold: 0.4 },
  );

  clips.forEach((clip) => observer.observe(clip));
}
