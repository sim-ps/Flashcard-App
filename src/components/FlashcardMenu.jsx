import editIcon from "../assets/images/icon-edit.svg";
import deleteIcon from "../assets/images/icon-delete.svg";

function FlashcardMenu({ onEdit, onDelete, menuRef, ...props }) {
  return (
    <ul
      ref={menuRef}
      {...props}
      className="absolute overflow-hidden drop-shadow-xl bg-white w-40 border-2 grid divide-y-2 rounded-lg bottom-0 right-0 m-2 md:m-3"
    >
      <li
        onClick={onEdit}
        className="hover:bg-neutral-100 px-4 py-3 capitalize text-preset-5 flex gap-2"
      >
        <img className="size-4" src={editIcon} /> edit
      </li>
      <li
        onClick={onDelete}
        className="hover:bg-neutral-100 px-4 py-3 capitalize text-preset-5 flex gap-2"
      >
        <img className="size-4" src={deleteIcon} />
        delete
      </li>
    </ul>
  );
}

export default FlashcardMenu;
