import { motion, spring } from "motion/react";
import { useState } from "react";
import clsx from "clsx";

import bg from "../assets/images/pattern-flashcard-bg.svg";

import resetIcon from "../assets/images/icon-reset.svg";
import circleCheckIcon from "../assets/images/icon-circle-check.svg";
import pinkStar from "../assets/images/pattern-star-pink.svg";
import yellowStar from "../assets/images/pattern-star-yellow.svg";
import blueStar from "../assets/images/pattern-star-blue.svg";
import masteredIcon from "../assets/images/icon-mastered.svg";

function FlashcardStudyMode({ card, onKnowThis, onResetProgress }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="p-6 grid gap-5 border-b-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundImage: `url(${bg})` }}
        className={clsx(
          "h-90 grid grid-rows-[0.5fr_5fr_0.5fr] justify-items-center place-items-center gap-4 py-5 px-4 rounded-2xl border-2 shadow-solid-2 relative",
          isOpen ? "bg-blue-400" : "bg-pink-400",
        )}
      >
        {/* category */}
        <p className="bg-white border-2 rounded-full text-xs px-3 py-1.5 font-medium">
          {card.category}
        </p>
        <motion.img
          className="absolute"
          src={pinkStar}
          alt="pink"
          initial={{ top: "50%", left: "50%" }}
          animate={
            isOpen
              ? { top: "2.5rem", left: "auto", right: "2rem", opacity: 1 }
              : { opacity: 0 }
          }
          transition={{
            type: spring,
            bounce: 0.4,
            duration: 0.5,
          }}
        />
        <motion.img
          className="absolute"
          src={blueStar}
          alt="blue"
          initial={{ top: "2.5rem", right: "2rem" }}
          animate={
            isOpen ? { top: "50%", left: "50%", opacity: 0 } : { opacity: 1 }
          }
          transition={{
            type: spring,
            bounce: 0.4,
            duration: 0.5,
          }}
        />

        <motion.img
          className="absolute"
          src={yellowStar}
          alt="yellow"
          initial={{
            top: "50%",
            left: "50%",
            opacity: 1,
          }}
          animate={
            isOpen
              ? {
                  top: "auto",
                  bottom: "3.5rem",
                  left: "1.5rem",
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.5,
          }}
        />
        <motion.img
          className="absolute"
          src={yellowStar}
          alt="yellow"
          initial={{
            bottom: "3.5rem",
            left: "1.5rem",
            opacity: 0,
          }}
          animate={
            isOpen
              ? {
                  top: "50%",
                  bottom: "auto",
                  left: "50%",
                  opacity: 0,
                }
              : {
                  top: "auto",
                  bottom: "3.5rem",
                  left: "1.5rem",
                  opacity: 1,
                }
          }
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.5,
          }}
        />
        <div className="text-center flex flex-col items-center gap-4 px-9">
          {/* question & answer */}
          <motion.h1
            layout
            className={clsx(
              "font-bold text-2xl md:text-preset-1-tablet lg:text-preset-1",
              isOpen ? "order-2" : "order-1",
            )}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.5,
            }}
          >
            {isOpen ? card.answer : card.question}
          </motion.h1>
          {/* reveal */}
          <motion.p
            layout
            className={clsx("font-medium", isOpen ? "order-1" : "order-2")}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.5,
            }}
          >
            {isOpen ? "Click to hide answer" : "Click to reveal answer"}
          </motion.p>
        </div>

        {card.knownCount === 5 ? (
          <div className="bg-teal-400 border-2 rounded-full text-xs px-3 py-1.5 font-medium flex gap-1.5">
            <img src={masteredIcon} alt="" />
            Mastered <span>{card.knownCount}/5</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <progress className="w-16 h-2" value={card.knownCount} max={5} />
            <span className="text-xs font-medium">{card.knownCount}/5</span>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-2.5">
        <button
          onClick={onKnowThis}
          className="button-primary md:justify-self-end"
        >
          <img className="shrink-0 size-4" src={circleCheckIcon} alt="check" />{" "}
          I Know This
        </button>
        <button
          onClick={onResetProgress}
          className="button-secondary md:justify-self-start"
        >
          <img className="shrink-0 size-4" src={resetIcon} alt="check" /> Reset
          Progress
        </button>
      </div>
    </section>
  );
}

export default FlashcardStudyMode;
