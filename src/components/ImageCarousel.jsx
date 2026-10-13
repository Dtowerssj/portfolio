import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

// Full-screen image viewer: a large modal with a carousel when a project has several images.
// Closes with the X button, a click outside the image or Escape; arrows and swipes move between images.
const ImageCarousel = ({ images, title, startIndex = 0, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const touchStartX = useRef(null);
  const closeRef = useRef(null);
  const total = images.length;

  const go = useCallback(
    (step) => setCurrent((i) => (i + step + total) % total),
    [total]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && total > 1) go(1);
      else if (e.key === "ArrowLeft" && total > 1) go(-1);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [go, onClose, total]);

  const onTouchEnd = (e) => {
    if (touchStartX.current === null || total < 2) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const arrowClass =
    "black-gradient absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex justify-center items-center text-white cursor-pointer border border-white/10 hover:border-[#915eff]/60 transition-colors";

  return createPortal(
    <motion.div
      className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/75 backdrop-blur-[2px]'
      role='dialog'
      aria-modal='true'
      aria-label={`${title} images`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div
        className='relative flex flex-col items-center max-w-full'
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <button
          ref={closeRef}
          type='button'
          aria-label='Close'
          onClick={onClose}
          className='black-gradient absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-10 h-10 rounded-full flex justify-center items-center text-white cursor-pointer border border-white/10 hover:border-[#915eff]/60 transition-colors'
        >
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'>
            <path d='M5 5l14 14M19 5L5 19' />
          </svg>
        </button>

        <div className='relative bg-tertiary rounded-2xl p-2 sm:p-3 shadow-card'>
          <AnimatePresence mode='wait' initial={false}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`${title} (${current + 1} of ${total})`}
              className='block w-[min(92vw,1100px)] max-h-[78vh] object-contain rounded-xl'
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              draggable={false}
            />
          </AnimatePresence>

          {total > 1 && (
            <>
              <button type='button' aria-label='Previous image' onClick={() => go(-1)} className={`${arrowClass} left-4`}>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M15 5l-7 7 7 7' />
                </svg>
              </button>
              <button type='button' aria-label='Next image' onClick={() => go(1)} className={`${arrowClass} right-4`}>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </>
          )}
        </div>

        <div className='mt-4 flex flex-col items-center gap-2'>
          <p className='text-white font-semibold text-[16px]'>
            {title}
            {total > 1 && <span className='text-secondary font-normal ml-2'>{current + 1} / {total}</span>}
          </p>
          {total > 1 && (
            <div className='flex gap-2'>
              {images.map((_, i) => (
                <button
                  key={i}
                  type='button'
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-[#915eff]" : "w-2 bg-white/30 hover:bg-white/60"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>,
    document.body
  );
};

const ImageViewer = ({ images, title, open, onClose }) => (
  <AnimatePresence>
    {open && <ImageCarousel images={images} title={title} onClose={onClose} />}
  </AnimatePresence>
);

export default ImageViewer;
