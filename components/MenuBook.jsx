'use client';

import { useMemo, useState } from 'react';
import { Download, Expand, Minus, Plus } from 'lucide-react';

const pages = Array.from({ length: 8 }, (_, i) => `/images/menu/page-${i + 1}.jpg`);

export default function MenuBook() {
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  const pageLabel = useMemo(() => `Page ${page + 1} of ${pages.length}`, [page]);

  const prevPage = () => {
    setPage((current) => Math.max(0, current - 1));
  };

  const nextPage = () => {
    setPage((current) => Math.min(pages.length - 1, current + 1));
  };

  const enterFullscreen = () => {
    const el = document.getElementById('interactive-menu');
    if (el?.requestFullscreen) el.requestFullscreen();
  };

  return (
    <section id="menu" className="relative overflow-hidden bg-cream py-24">
      <div className="tile-strip absolute inset-x-0 top-0 h-10 opacity-80" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="arabic mb-2 text-3xl text-olive">القائمة</p>
          <h2 className="menu-heading text-5xl font-semibold text-deep md:text-7xl">
            Interactive Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">
            Browse the original Beit El Khetyar menu one full page at a time for better readability on desktop and mobile.
          </p>
        </div>

        <div
          id="interactive-menu"
          className="rounded-[2rem] border border-olive/20 bg-[#e8eadf] p-4 shadow-book md:p-8"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-deep">{pageLabel}</p>
              <p className="text-sm text-ink/60">
                Single-page viewing prevents the menu from being visually split at the fold.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.75, z - 0.1))}
                className="rounded-full border border-olive/25 px-3 py-2 transition hover:bg-olive hover:text-cream"
                aria-label="Zoom out"
              >
                <Minus size={16} />
              </button>

              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(1.45, z + 0.1))}
                className="rounded-full border border-olive/25 px-3 py-2 transition hover:bg-olive hover:text-cream"
                aria-label="Zoom in"
              >
                <Plus size={16} />
              </button>

              <button
                type="button"
                onClick={enterFullscreen}
                className="rounded-full border border-olive/25 px-3 py-2 transition hover:bg-olive hover:text-cream"
                aria-label="Open fullscreen"
              >
                <Expand size={16} />
              </button>

              <a
                href="/menu.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-olive px-4 py-2 text-sm font-semibold text-cream transition hover:bg-deep"
              >
                <Download size={16} /> PDF
              </a>
            </div>
          </div>

          <div className="overflow-auto rounded-[1.5rem] bg-paper p-3 md:p-6">
            <div
              className="mx-auto flex w-full justify-center"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'top center',
                transition: 'transform .25s ease',
              }}
            >
              <img
                src={pages[page]}
                alt={`Beit El Khetyar menu page ${page + 1}`}
                className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain shadow-lift"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevPage}
              disabled={page === 0}
              className="rounded-full border border-olive/30 px-6 py-3 font-semibold text-olive transition hover:bg-olive hover:text-cream disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={nextPage}
              disabled={page === pages.length - 1}
              className="rounded-full bg-olive px-6 py-3 font-semibold text-cream transition hover:bg-deep disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
