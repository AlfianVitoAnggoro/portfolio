'use client';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { CERTIFICATES_DATA as cards } from '@/constants';

const CertificateCard = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 rounded-full grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.certificateName}-${id}`}
              ref={ref}
              className="relative max-w-[500px] h-auto md:h-fit laptop:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl "
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.imageUrl}
                  alt={active.certificateName}
                  className="w-full h-auto lg:h-80 rounded-3xl object-cover object-top"
                />
              </motion.div>
              <motion.button
                key={`button-${active.certificateName}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-red-500 rounded-full h-8 w-8"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`certificateName-${active.certificateName}-${id}`}
                      className="text-[1.3rem] font-bold text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.certificateName}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className="text-black text-[1rem] font-medium dark:text-neutral-400 text-base"
                    >
                      {active.author}
                    </motion.p>
                  </div>
                </div>
                <div className="relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-800 text-sm md:text-sm lg:text-base md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] h-28"
                  >
                    {active.description}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="laptop:max-w-[1024px] mx-auto w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.certificateName}-${id}`}
            key={index}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:text-black text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.id}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={card.imageUrl}
                  alt={card.certificateName}
                  className="h-auto w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`certificateName-${card.certificateName}-${id}`}
                  className="font-bold text-center text-[1.3rem] mb-2  md:text-left text-base"
                >
                  {card.certificateName}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.id}-${id}`}
                  className="font-medium text-center text-[1rem] md:text-left text-base"
                >
                  {card.author}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default CertificateCard;
