import { useEffect, useRef } from 'react';
import './styles/Cursor.css';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    let hover = false;

    document.addEventListener('mousemove', (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });

    requestAnimationFrame(function loop() {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
      }
      requestAnimationFrame(loop);
    });

    document.querySelectorAll('[data-cursor]').forEach((item) => {
      const el = item as HTMLElement;
      el.addEventListener('mouseover', (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        if (el.dataset.cursor === 'icons') {
          cursor.classList.add('cursor-icons');
          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
          cursor.style.setProperty('--cursorH', `${rect.height}px`);
          hover = true;
        }
        if (el.dataset.cursor === 'disable') {
          cursor.classList.add('cursor-disable');
        }
      });
      el.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-disable', 'cursor-icons');
        hover = false;
      });
    });
  }, []);

  return <div className="cursor-main" ref={cursorRef} />;
};

export default Cursor;