import "./App.css";

import { useState } from "react";

import masteredStatsIcon from "./assets/images/icon-stats-mastered.svg";
import totalStatsIcon from "./assets/images/icon-stats-total.svg";
import inProgressStatsIcon from "./assets/images/icon-stats-in-progress.svg";
import notStartedStatsIcon from "./assets/images/icon-stats-not-started.svg";

import Card from "./components/Card";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import FlashcardStudyMode from "./components/FlashcardStudyMode";

import { useFlashcards } from "./hooks/useFlashcards";

function App() {
  const [flashcards, setFlashcards] = useFlashcards();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [hideMastered, setHideMastered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Derived study deck and statistics
  const studyCards = flashcards.filter((card) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(card.category);
    const matchesMastered = !hideMastered || card.knownCount !== 5;

    return matchesCategory && matchesMastered;
  });

  const currentCard = studyCards[currentIndex];

  const stats = {
    total: flashcards.length,
    mastered: flashcards.filter((card) => card.knownCount === 5).length,
    inProgress: flashcards.filter(
      (card) => card.knownCount > 0 && card.knownCount < 5,
    ).length,
    notStarted: flashcards.filter((card) => card.knownCount === 0).length,
  };

  // Header controls
  function handleToggleCategory(category) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
    setCurrentIndex(0);
  }

  function handleHideMastered(checked) {
    setHideMastered(checked);
    setCurrentIndex(0);
  }

  function handleShuffleCards() {
    setFlashcards((current) => {
      const shuffled = [...current];

      for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[index],
        ];
      }

      return shuffled;
    });
    setCurrentIndex(0);
  }

  // Study progress actions
  function handleMarkCurrentCardKnown() {
    setFlashcards((cards) =>
      cards.map((item) =>
        item.id === currentCard.id
          ? { ...item, knownCount: Math.min((item.knownCount ?? 0) + 1, 5) }
          : item,
      ),
    );
  }

  function handleResetCurrentCardProgress() {
    setFlashcards((cards) =>
      cards.map((item) =>
        item.id === currentCard.id ? { ...item, knownCount: 0 } : item,
      ),
    );
  }

  // Pagination actions
  function handlePreviousCard() {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  function handleNextCard() {
    setCurrentIndex((index) => Math.min(index + 1, studyCards.length - 1));
  }

  return (
    <Layout>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
        <main className="card flex flex-col">
          <Header
            className="p-4 border-b-2"
            data={{ flashcards }}
            shuffledCards={handleShuffleCards}
            hideMastered={hideMastered}
            setHideMastered={handleHideMastered}
            selectedCategories={selectedCategories}
            onCategoryChange={handleToggleCategory}
          />

          <FlashcardStudyMode
            card={currentCard}
            onKnowThis={handleMarkCurrentCardKnown}
            onResetProgress={handleResetCurrentCardProgress}
          />

          <Pagination
            currentIndex={currentIndex}
            totalCards={studyCards.length}
            onPrevious={handlePreviousCard}
            onNext={handleNextCard}
          />
        </main>
        <aside className="card px-4 py-5 grid gap-4">
          <h2 className="text-2xl font-semibold">Study Statistics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
            <Card
              title="Total cards"
              value={stats.total}
              icon={totalStatsIcon}
              bgColor="bg-blue-400"
            />
            <Card
              title="Mastered"
              value={stats.mastered}
              icon={masteredStatsIcon}
              bgColor="bg-teal-400"
            />
            <Card
              title="In Progress"
              value={stats.inProgress}
              icon={inProgressStatsIcon}
              bgColor="bg-pink-500"
            />
            <Card
              title="Not Started"
              value={stats.notStarted}
              icon={notStartedStatsIcon}
              bgColor="bg-pink-400"
            />
          </div>
        </aside>
      </div>
    </Layout>
  );
}

export default App;
