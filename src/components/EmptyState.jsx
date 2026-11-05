function EmptyState() {
  return (
    <section className="flex-1 p-6 grid">
      <div className="h-125 flex flex-col items-center justify-center gap-4 text-center px-0 lg:px-45">
        <h1 className="font-bold text-2xl md:text-preset-1-tablet lg:text-preset-1">
          No cards to study
        </h1>
        <p className="font-medium text-neutral-400">
          You don’t have any cards yet. Add your first card in the All Cards
          tab.
        </p>
        <button className="button-secondary ">Go to All Cards</button>
      </div>
    </section>
  );
}

export default EmptyState;
