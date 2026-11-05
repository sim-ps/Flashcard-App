function Edit({ card }) {
  return (
    <>
      <label htmlFor="question">
        Question
        <input
          type="text"
          id="question"
          name="question"
          defaultValue={card?.question}
          placeholder="e.g., What is the capital of France?"
        />
      </label>
      <label htmlFor="answer">
        Answer
        <textarea
          name="answer"
          id="answer"
          rows="5"
          defaultValue={card?.answer}
          placeholder="e.g., Paris"
        ></textarea>
      </label>
      <label htmlFor="category">
        Category
        <input
          type="text"
          id="category"
          name="category"
          defaultValue={card?.category}
          placeholder="e.g., Geography"
        />
      </label>
      <button type="submit" className="button-primary w-fit place-self-end">
        Update Card
      </button>
    </>
  );
}

export default Edit;
