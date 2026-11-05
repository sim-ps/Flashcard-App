import clsx from "clsx";
import { useId } from "react";
function CheckBox({ label, className = "", checked, onChange }) {
  const id = useId();
  return (
    <label
      className={clsx("flex flex-row gap-2 md:gap-3 select-none", className)}
      htmlFor={id}
    >
      <span className="relative size-4">
        <input
          className="peer"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <svg
          aria-hidden="true"
          fill="currentColor"
          height="7"
          viewBox="0 0 9 7"
          width="9"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute z-1 left-1/2 top-1/2 -translate-x-0.5 -translate-y-0.5 opacity-0 peer-checked:opacity-100"
        >
          <path
            d="m7.98828.0976562c.09766-.0976562.25391-.0976562.33203 0l.56641.5468748c.07812.097657.07812.253907 0 .332031l-5.85938 5.859378c-.09765.09765-.23437.09765-.33203 0l-2.617185-2.59766c-.078125-.09766-.078125-.2539 0-.33203l.566406-.56641c.078125-.07812.234375-.07812.332031 0l1.874998 1.89454z"
            fill="#2e1401"
          />
        </svg>
      </span>
      {label}
    </label>
  );
}

export default CheckBox;
