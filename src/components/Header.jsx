import clsx from "clsx";

import shuffleIcon from "../assets/images/icon-shuffle.svg";

import HideMasteredCheckBox from "./HideMasteredCheckBox";
import DropDownButton from "./DropDownButton";

function Header({
  data,
  shuffledCards,
  className,
  hideMastered,
  setHideMastered,
  selectedCategories,
  onCategoryChange,
}) {
  return (
    <header
      className={clsx(
        "grid grid-cols-2 md:grid-cols-[0.5fr_3fr_0.5fr] items-center gap-2.5 md:gap-4 mb-1",
        className,
      )}
    >
      <DropDownButton
        data={data}
        selectedCategories={selectedCategories}
        onCategoryChange={onCategoryChange}
      />
      <HideMasteredCheckBox
        checked={hideMastered}
        onChange={setHideMastered}
        className="order-3 md:order-0 w-fit"
        label="Hide Mastery"
      />

      <button
        onClick={shuffledCards}
        className="w-fit bg-white hover:bg-neutral-100 justify-self-end button-accent"
        type="button"
      >
        <img className="shrink-0 size-4" src={shuffleIcon} alt="shuffle" />
        Shuffle
      </button>
    </header>
  );
}

export default Header;
