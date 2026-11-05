import { useState } from "react";

import Flashcard from "./Flashcard";

import { motion, AnimatePresence } from "motion/react";
import EmptyState from "./EmptyState";

function Flashcards({
  data,
  openModel,
  hideMastered,
  selectedCategories = [],
}) {
  const flashcards = data;

  const [visibleCount, setVisibleCount] = useState(9);

  const filteredFlashcards = flashcards.filter((card) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(card.category);

    const matchesMastered = !hideMastered || card.knownCount !== 5;

    return matchesCategory && matchesMastered;
  });

  const visibleFlashCards = filteredFlashcards.slice(0, visibleCount);
  const hasMore = visibleCount < filteredFlashcards.length;

  return (
    <>
      {flashcards.length === 0 && <EmptyState />}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6">
        <AnimatePresence mode="popLayout">
          {visibleFlashCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="card grid grid-rows-[0.5fr_2fr_0.5fr]"
            >
              <Flashcard
                openModel={openModel}
                card={card}
                question={card.question}
                answer={card.answer}
                category={card.category}
                knownCount={card.knownCount}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
      {hasMore && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 3)}
          className="button-secondary w-fit mx-auto mt-12"
          type="button"
        >
          Load More
        </button>
      )}
    </>
  );
}

export default Flashcards;
