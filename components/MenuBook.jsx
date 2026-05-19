'use client';

import { useRef, useState } from 'react';
import { Download, Expand, Minus, Plus } from 'lucide-react';

const pages = Array.from(
  { length: 8 },
  (_, i) => `/images/menu/page-${i + 1}.jpg`
);

export default function MenuBook() {
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState('next');
  const [flipImage, setFlipImage] = useState(pages[0]);
  const [touchStart, setTouchStart] = useState(null);

  const audioRef = useRef(null);

  const playFlipSound = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.2;
    audioRef.current.play().catch(() => {});
  };

  const goToPage = (nextPage, nextDirection) => {
    if (nextPage < 0 || nextPage >= pages.length || flipping) return;

    playFlipSound();

    setDirection(nextDirection);
    setFlipImage(pages[page]);
    setFlipping(true);

    setTimeout(() => {
      setPage(nextPage);
    }, 180);

    setTimeout(() => {
      setFlipping(false);
    }, 720);
  };

  const prevPage = () => goToPage(page - 1, 'prev');
  const nextPage = () => goToPage(page + 1, 'next');

  const handleMenuClick = (e) => {
    if (flipping) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickedRightSide = e.clientX > rect.left + rect.width / 2;

    if (clickedRightSide) {
      nextPage();
    } else {
      prevPage();
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null || flipping) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextPage();
      } else {
        prevPage();
      }
    }

    setTouchStart(null);
  };

  const enterFullscreen = () => {
    const el = document.getElementById('interactive-menu');
    if (el?.requestFullscreen) el.requestFullscreen();
  };

  return (
    <section id="menu" className="relative overflow-hidden bg-cream py-14 md:py-24">
      <audio ref={audioRef} src="/sounds/page-flip.mp3" preload="auto" />

      <div className="tile-strip absolute inset-x-0 top-0 h-10 opacity-80" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center md:mb-10">
          <p className="arabic mb-2 text-3xl text-olive">
            القائمة
          </p>

          <h2 className="menu-heading text-[2.8rem] font-semibold leading-[0.95] text-deep md:text-7xl">
            Interactive Menu
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink/70 md:text-base">
            Browse the original Beit El Khetyar menu one complete page at a time.
          </p>
        </div>

        <div
          id="interactive-menu"
          className="rounded-[2rem] border border-olive/20 bg-[#e8eadf] p-4 shadow-book md:p-8"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-deep">
                Page {page + 1} of {pages.length}
              </p>

              <p className="text-sm text-ink/60">
                Tap right side for next page.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.9, z - 0.1))}
                className="rounded-full border border-olive/25 px-3 py-2 transition hover:bg-olive hover:text-cream"
              >
                <Minus size={16} />
              </button>

              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(1.4, z + 0.1))}
                className="rounded-full border border-olive/25 px-3 py-2 transition hover:bg-olive hover:text-cream"
              >
                <Plus size={16} />
              </button>

              <button
                type="button"
                onClick={enterFullscreen}
                className="rounded-full border border-olive/25 px-3 py-2 transition hover:bg-olive hover:text-cream"
              >
                <Expand size={16} />
              </button>

              <a
                href="/menu.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-olive px-4 py-2 text-sm font-semibold text-cream transition hover:bg-deep"
              >
                <Download size={16} />
                PDF
              </a>
            </div>
          </div>

          <div className="overflow-auto rounded-[1.5rem] bg-paper p-2 md:p-6">
            <div
              className="mx-auto flex w-full justify-center"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'top center',
                transition: 'transform .25s ease',
              }}
            >
              <div
                className="menu-flip-stage relative w-full max-w-[1100px] cursor-grab overflow-hidden rounded-xl bg-paper shadow-lift active:cursor-grabbing"
                onClick={handleMenuClick}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={pages[page]}
                  alt={`Beit El Khetyar menu page ${page + 1}`}
                  className="block h-[430px] w-full object-contain md:h-[620px] lg:h-[720px]"
                />

                {flipping && (
                  <div
                    className={`menu-flip-sheet ${
                      direction === 'next'
                        ? 'menu-flip-sheet-next'
                        : 'menu-flip-sheet-prev'
                    }`}
                  >
                    <img
                      src={flipImage}
                      alt="Flipping menu page"
                      className="h-full w-full object-cover"
                    />

                    <span className="menu-flip-shadow" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevPage}
              disabled={page === 0 || flipping}
              className="rounded-full border border-olive/30 px-6 py-3 font-semibold text-olive transition hover:bg-olive hover:text-cream disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={nextPage}
              disabled={page === pages.length - 1 || flipping}
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