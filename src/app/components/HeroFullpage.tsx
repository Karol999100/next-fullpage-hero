'use client';

import React, { useEffect, useRef } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

export default function HeroFullpage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const fp = new fullpage(containerRef.current, {
      licenseKey: 'ABCDEF-123456-XYZ789',  // ← your free GPL key here
      autoScrolling: true,
      navigation: true,
      scrollingSpeed: 700,
      // …any other options
    });
    
    return () => fp.destroy('all');
  }, []);

  return (
    <div id="fullpage" ref={containerRef}>
      <div className="section" style={{ background: "url('/one.jpg') center/cover" }} />
      <div className="section" style={{ background: "url('/two.jpg') center/cover" }} />
      <div className="section" style={{ background: "url('/three.jpg') center/cover" }} />
      {/* add more <div className="section">…</div> */}
    </div>
  );
}
