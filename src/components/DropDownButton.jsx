import { useEffect, useState } from "react";
import chevronDowntIcon from "../assets/images/icon-chevron-down.svg";
import CheckBox from "./CheckBox";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

function DropDownButton({ data, selectedCategories, onCategoryChange }) {
  const categories = [...new Set(data.flashcards.map((card) => card.category))];

  const [open, setOpen] = useState(false);
  useEffect(() => {});
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((open) => !open)}
        className="button-accent w-fit bg-white hover:bg-neutral-100"
        type="button"
      >
        All Categories{" "}
        <motion.img
          className={clsx("shrink-0 size-4")}
          animate={{ rotate: open ? 0 : -90 }}
          transition={{ duration: 0.2 }}
          src={chevronDowntIcon}
          alt="down"
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-10 mt-4 w-65 border-2 grid divide-y-2 rounded-lg bg-white"
          >
            {categories.map((category) => (
              <CheckBox
                key={category}
                className="px-4 py-3 capitalize"
                label={category}
                checked={selectedCategories?.includes(category)}
                onChange={() => onCategoryChange?.(category)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropDownButton;
