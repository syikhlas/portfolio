import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function initialFX() {
  document.body.style.overflowY = 'auto';

  gsap.fromTo('.header',
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: 'power1.inOut', delay: 0.1 }
  );

  gsap.fromTo('.landing-greeting',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.1 }
  );

  gsap.fromTo('.landing-name-char',
    { opacity: 0, y: 60, filter: 'blur(6px)' },
    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1,
      ease: 'power3.inOut', stagger: 0.03, delay: 0.25 }
  );

  gsap.fromTo('.landing-role-tag',
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 1 }
  );

  gsap.fromTo('.landing-right',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
  );

  gsap.fromTo('.resume-btn',
    { opacity: 0 },
    { opacity: 1, duration: 0.8, delay: 1.2 }
  );

  gsap.fromTo('.about-body',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
      scrollTrigger: { trigger: '.about-section', start: 'top 70%' } }
  );

  gsap.fromTo('.whatido-card',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12,
      scrollTrigger: { trigger: '.whatido-section', start: 'top 65%' } }
  );

  gsap.fromTo('.work-slide',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '.work-section', start: 'top 65%' } }
  );

  gsap.fromTo('.career-timeline-line',
    { scaleY: 0 },
    { scaleY: 1, duration: 1.5, ease: 'power2.inOut', transformOrigin: 'top',
      scrollTrigger: { trigger: '.career-section', start: 'top 60%', scrub: 0.5 } }
  );

  gsap.fromTo('.career-item',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', stagger: 0.2,
      scrollTrigger: { trigger: '.career-section', start: 'top 60%' } }
  );

  gsap.fromTo('.stack-card',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.04,
      scrollTrigger: { trigger: '#techstack', start: 'top 70%' } }
  );
}