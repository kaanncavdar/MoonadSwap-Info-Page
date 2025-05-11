"use client";
import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      frameRef.current = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { 
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    frameRef.current = requestAnimationFrame(updatePosition);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div 
      ref={cursorRef}
      className={`${styles.cursor} ${isClicking ? styles.clicking : ''}`}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        willChange: 'transform'
      }}
    />
  );
}