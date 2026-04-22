import { useEffect, useRef } from 'react';
import '../Character.css';

export default function CharacterModel() {
  const imgRef  = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0, curY = 0;
    let tgtX = 0, tgtY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      tgtX = Math.max(-1, Math.min(1, (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2)));
      tgtY = Math.max(-1, Math.min(1, (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)));
    };

    const loop = () => {
      curX += (tgtX - curX) * 0.055;
      curY += (tgtY - curY) * 0.055;

      if (imgRef.current) {
        const rotY =  curX * 14;
        const rotX = -curY * 8;
        imgRef.current.style.transform = `
          perspective(700px)
          rotateY(${rotY}deg)
          rotateX(${rotX}deg)
        `;
      }

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translateX(calc(-50% + ${curX * 20}px)) translateY(${curY * 10}px)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="char-3d-wrap">
      <div className="char-3d-glow" ref={glowRef} />
      <img
        ref={imgRef}
        src="/avatar.png"
        alt="Ikhlas Syed"
        className="char-3d-body"
        draggable={false}
      />
    </div>
  );
}