import chevronLeftIcon from "../assets/images/icon-chevron-left.svg";
import chevronRightIcon from "../assets/images/icon-chevron-right.svg";

function Pagination({ currentIndex, totalCards, onPrevious, onNext }) {
  return (
    <div className="p-6 flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="p-0 w-10 h-10 md:px-4 md:py-3 md:w-auto md:h-auto button-accent"
        type="button"
      >
        <img className="" src={chevronLeftIcon} alt="left" />
        <p className="hidden md:block">Previous</p>
      </button>

      <p className="font-medium text-neutral-600">
        Card {currentIndex + 1} out of {totalCards}
      </p>

      <button
        onClick={onNext}
        disabled={currentIndex >= totalCards - 1}
        className="p-0 w-10 h-10 md:px-4 md:py-3 md:w-auto md:h-auto button-accent"
        type="button"
      >
        <p className="hidden md:block">Next</p>
        <img className="" src={chevronRightIcon} alt="right" />
      </button>
    </div>
  );
}

export default Pagination;
