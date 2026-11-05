import "./App.css";
import plusCircleIcon from "./assets/images/icon-circle-plus.svg";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Flashcards from "./components/Flashcards";
import { useState } from "react";

import Modal from "./components/Modal";
import Edit from "./components/Edit";
import DeleteConfirm from "./components/DeleteConfirm";

import { useFlashcards } from "./hooks/useFlashcards";

function AllCards() {
  const [flashcards, setFlashcards] = useFlashcards();

  const [hideMastered, setHideMastered] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [activeModal, setActiveModal] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  // Card form actions
  function handleCreateCard(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newCard = {
      id: crypto.randomUUID(),
      question: formData.get("question").trim(),
      answer: formData.get("answer").trim(),
      category: formData.get("category").trim(),
      knownCount: 0,
    };

    setFlashcards((currentCards) => [newCard, ...currentCards]);
    event.currentTarget.reset();
  }

  function handleUpdateCard(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const updates = {
      question: String(formData.get("question") ?? "").trim(),
      answer: String(formData.get("answer") ?? "").trim(),
      category: String(formData.get("category") ?? "").trim(),
    };

    setFlashcards((currentCards) =>
      currentCards.map((card) =>
        card.id === activeCard.id ? { ...card, ...updates } : card,
      ),
    );
    handleCloseModal();
  }

  function handleDeleteCard() {
    if (!activeCard) return;

    setFlashcards((currentCards) =>
      currentCards.filter((card) => card.id !== activeCard.id),
    );
    handleCloseModal();
  }

  // Modal actions
  function handleOpenModal(type, card) {
    setActiveCard(card);
    setActiveModal(type);
  }

  function handleCloseModal() {
    setActiveCard(null);
    setActiveModal(null);
  }

  // List controls
  function handleToggleCategory(category) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  }

  function handleShuffleCards() {
    setFlashcards((currentCards) => {
      const shuffled = [...currentCards];

      for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[index],
        ];
      }

      return shuffled;
    });
  }

  return (
    <Layout className="relative">
      <Modal
        activeModal={activeModal == "edit"}
        closeModel={handleCloseModal}
        heading="Edit your card"
        content={<Edit card={activeCard} />}
        onSubmit={handleUpdateCard}
      />
      <Modal
        activeModal={activeModal == "delete"}
        closeModel={handleCloseModal}
        heading="Delete this card?"
        content={
          <DeleteConfirm
            card={activeCard}
            onCancel={handleCloseModal}
            onDelete={handleDeleteCard}
          />
        }
      />
      <main className="grid gap-8">
        <form
          onSubmit={handleCreateCard}
          className="card flex flex-col justify-center p-6 gap-4"
        >
          <label htmlFor="question">
            Question
            <input
              type="text"
              id="question"
              name="question"
              placeholder="e.g., What is the capital of France?"
            />
          </label>
          <label htmlFor="answer">
            Answer
            <textarea
              name="answer"
              id="answer"
              rows="5"
              placeholder="e.g., Paris"
            ></textarea>
          </label>
          <label htmlFor="category">
            Category
            <input
              type="text"
              id="category"
              name="category"
              placeholder="e.g., Geography"
            />
          </label>
          <button
            className="button-primary self-start font-semibold"
            type="submit"
            name="create"
            id="create"
          >
            <img src={plusCircleIcon} alt="plus" />
            Create Card
          </button>
        </form>
        <Header
          shuffledCards={handleShuffleCards}
          data={{ flashcards }}
          hideMastered={hideMastered}
          setHideMastered={setHideMastered}
          selectedCategories={selectedCategories}
          onCategoryChange={handleToggleCategory}
        />
      </main>
      <Flashcards
        data={flashcards}
        openModel={handleOpenModal}
        hideMastered={hideMastered}
        selectedCategories={selectedCategories}
      />
    </Layout>
  );
}

export default AllCards;
