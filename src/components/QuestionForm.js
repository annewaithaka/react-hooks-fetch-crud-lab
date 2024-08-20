import React, { useState } from "react";

const QuestionForm = ({ onAddQuestion }) => {
  const [formData, setFormData] = useState({
    prompt: "",
    answer: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.prompt && formData.answer) {
      onAddQuestion(formData);
      setFormData({
        prompt: "",
        answer: "",
      });
    } else {
      alert("Both prompt and answer are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question Prompt:
        <input
          type="text"
          value={formData.prompt}
          onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
        />
      </label>
      <label>
        Correct Answer:
        <input
          type="text"
          value={formData.answer}
          onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
        />
      </label>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;
