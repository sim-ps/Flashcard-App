import masteredIcon from "../assets/images/icon-mastered.svg";
import { useState, useRef, useEffect } from "react";
import FlashcardMenu from "./FlashcardMenu";

import { AnimatePresence, motion } from "motion/react";

const MotionFlashcardMenu = motion.create(FlashcardMenu);

function Flashcard({
  openModel,
  card,
  question,
  answer,
  category,
  knownCount,
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleOutsideClick(event) {
      if (
        !triggerRef.current?.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", handleOutsideClick);
  }, [open]);
  return (
    <>
      <p className="text-preset-3 p-4">{question}</p>
      <div className="p-4 border-t-2 border-b-2 relative">
        <p className="text-sm font-medium text-neutral-600 mb-2">Answer:</p>
        <p className="text-sm font-medium">{answer}</p>

        <AnimatePresence>
          {open && (
            <MotionFlashcardMenu
              ref={menuRef}
              onEdit={() => openModel("edit", card)}
              onDelete={() => openModel("delete", card)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className=" grid grid-cols-[auto_3fr_1fr] md:grid-cols-[auto_4fr_auto] divide-x-2 divide-neutral-900">
        <div className="p-2.5">
          <p
            title={category}
            className="cursor-default bg-white max-w-25 truncate md:max-w-max whitespace-nowrap border-2 rounded-full text-xs px-3 py-1.5 font-medium shadow-solid-2"
          >
            {category}
          </p>
        </div>

        {knownCount === 5 ? (
          <div className="p-2.5">
            <p className="flex gap-2 bg-teal-400 w-fit truncate border-2 rounded-full text-xs px-3 py-1.5 font-medium">
              <img src={masteredIcon} alt="mastered" />
              Mastered {knownCount}/5
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2 p-2.5">
            <progress className="w-16 h-2" value={knownCount} max={5} />
            <span className="text-xs font-medium">{knownCount}/5</span>
          </div>
        )}

        <div className="p-2.5">
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((open) => !open)}
            className="p-0 rounded-sm hover:shadow-[2px_2px_black] transition-shadow"
          >
            <svg className="w-7" viewBox="0 0 24 24">
              <path
                d="m12 10.3125c.9141 0 1.6875.7734 1.6875 1.6875 0 .9492-.7734 1.6875-1.6875 1.6875-.9492 0-1.6875-.7383-1.6875-1.6875 0-.9141.7383-1.6875 1.6875-1.6875zm-1.6875-3.65625c0-.91406.7383-1.6875 1.6875-1.6875.9141 0 1.6875.77344 1.6875 1.6875 0 .94922-.7734 1.6875-1.6875 1.6875-.9492 0-1.6875-.73828-1.6875-1.6875zm0 10.68755c0-.9141.7383-1.6876 1.6875-1.6876.9141 0 1.6875.7735 1.6875 1.6876 0 .9492-.7734 1.6874-1.6875 1.6874-.9492 0-1.6875-.7382-1.6875-1.6874z"
                fill="#2e1401"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Flashcard;
