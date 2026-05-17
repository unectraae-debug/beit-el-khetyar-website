'use client';

import dynamic from 'next/dynamic';
import { useMemo, useRef, useState } from 'react';
import { Download, Expand, Minus, Plus, Volume2, VolumeX } from 'lucide-react';

const HTMLFlipBook = dynamic(() => import('react-pageflip'), { ssr: false });

const pages = Array.from({ length: 8 }, (_, i) => `/images/menu/page-${i + 1}.jpg`);

export default function MenuBook() {
  const bookRef = useRef(null);
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [muted, setMuted] = useState(true);

  const spreadLabel = useMemo(() => {
    const left = Math.max(1, page + 1);
    const right = Math.min(8, page + 2);
    return `Pages ${left}-${right} of 8`;
  }, [page]);

  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const flipNext = () => bookRef.current?.pageFlip()?.flipNext();

  const enterFullscreen = () => {
    const el = document.getElementById('interactive-menu');
    if (el?.requestFullscreen) el.requestFullscreen();
  };

  return (
    <section id="menu" className="relative overflow-hidden py-24">
      <div className="tile-strip absolute inset-x-0 top-0 h-10 opacity-80" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="arabic mb-2 text-3xl text-olive">القائمة</p>
          <h2 className="menu-heading text-5xl font-semibold text-deep md:text-7xl">Interactive Menu Book</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">
            Flip through the real Beit El Khetyar menu as a two-sided open book. Drag the page corner, swipe on mobile, zoom, or download the original PDF.
          </p>
        </div>

        <div id="interactive-menu" className="rounded-[2rem] border border-olive/20 bg-[#e8eadf] p-4 shadow-book md:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-deep">{spreadLabel}</p>
              <p className="text-sm text-ink/60">Desktop shows two facing pages. Mobile switches to a readable single-page flip.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setZoom((z) => Math.max(.75, z - .1))} className="rounded-full border border-olive/25 px-3 py-2 hover:bg-olive hover:text-cream"><Minus size={16} /></button>
              <button onClick={() => setZoom((z) => Math.min(1.35, z + .1))} className="rounded-full border border-olive/25 px-3 py-2 hover:bg-olive hover:text-cream"><Plus size={16} /></button>
              <button onClick={() => setMuted(!muted)} className="rounded-full border border-olive/25 px-3 py-2 hover:bg-olive hover:text-cream">{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
              <button onClick={enterFullscreen} className="rounded-full border border-olive/25 px-3 py-2 hover:bg-olive hover:text-cream"><Expand size={16} /></button>
              <a href="/menu.pdf" download className="inline-flex items-center gap-2 rounded-full bg-olive px-4 py-2 text-sm font-semibold text-cream hover:bg-deep"><Download size={16} /> PDF</a>
            </div>
          </div>

          <div className="overflow-auto py-6">
            <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform .25s ease' }}>
              <HTMLFlipBook
                ref={bookRef}
                width={500}
                height={645}
                size="stretch"
                minWidth={300}
                maxWidth={520}
                minHeight={390}
                maxHeight={675}
                maxShadowOpacity={0.35}
                showCover={false}
                mobileScrollSupport={true}
                useMouseEvents={true}
                drawShadow={true}
                flippingTime={950}
                className="shadow-book"
                onFlip={(e) => setPage(e.data)}
              >
                {pages.map((src, i) => (
                  <div key={src} className="flip-page">
                    <img src={src} alt={`Beit El Khetyar menu page ${i + 1}`} />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button onClick={flipPrev} className="rounded-full border border-olive/30 px-6 py-3 font-semibold text-olive hover:bg-olive hover:text-cream">Previous</button>
            <button onClick={flipNext} className="rounded-full bg-olive px-6 py-3 font-semibold text-cream hover:bg-deep">Next Page</button>
          </div>
        </div>
      </div>
    </section>
  );
}
