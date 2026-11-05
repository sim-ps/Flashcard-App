import clsx from "clsx";
function Card({ title, value, icon, bgColor }) {
  return (
    <div className="overflow-hidden shadow-solid-2 border-2 rounded-2xl grid grid-cols-[2fr_1fr]">
      <div className="p-5 grid gap-8 lg:gap-3.5">
        <p className="text-base font-medium">{title}</p>
        <p className="text-2xl md:text-[32px] lg:text-[40px] font-bold">
          {value}
        </p>
      </div>
      <div className={clsx("grid place-items-center border-l-2", bgColor)}>
        <img className="size-7" src={icon} alt="Total Cards" />
      </div>
    </div>
  );
}

export default Card;
