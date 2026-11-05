function Modal({ activeModal, closeModel, content, heading, onSubmit }) {
  return (
    <>
      {activeModal && (
        <section className="absolute inset-0 flex items-center justify-center bg-neutral-900/70 z-10">
          <form
            onSubmit={onSubmit}
            className="overflow-y-auto w-150 card p-6 grid gap-4"
          >
            <div className="relative">
              <h1 className="text-preset-3 py-4">{heading}</h1>
              <button
                aria-label="Close"
                type="button"
                onClick={() => closeModel()}
                className="border-transparent rounded-sm p-2 cursor-pointer transition-colors duration-200 absolute right-0 top-0"
              >
                <svg className="size-5" aria-hidden="true" viewBox="0 0 16 16">
                  <path d="m9.48438 7.98438 3.37502 3.37502c.1875.1875.1875.5312 0 .7187l-.7813.7813c-.1875.1875-.5312.1875-.7187 0l-3.34378-3.37502-3.375 3.37502c-.1875.1875-.53124.1875-.71874 0l-.78126-.7813c-.1875-.1875-.1875-.5312 0-.7187l3.375-3.37502-3.375-3.34376c-.1875-.1875-.1875-.53124 0-.71874l.78126-.78126c.1875-.1875.53124-.1875.71874 0l3.375 3.375 3.34378-3.375c.1875-.1875.5312-.1875.7187 0l.7813.78126c.1875.1875.1875.53124 0 .71874z" />
                </svg>
              </button>
            </div>

            {content}
          </form>
        </section>
      )}
    </>
  );
}

export default Modal;
