function DeleteConfirm({ card, onCancel, onDelete }) {
  return (
    <>
      <p>
        Are you sure you want to delete "{card?.question}"? This action can’t be
        undone.
      </p>
      <hr />
      <div className="flex justify-end gap-4">
        <button type="button" className="button-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" className="button-primary" onClick={onDelete}>
          Delete Card
        </button>
      </div>
    </>
  );
}

export default DeleteConfirm;
