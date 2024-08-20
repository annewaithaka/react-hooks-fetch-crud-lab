import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("http://localhost:4000/questions");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    }

    fetchQuestions();
  }, []);

  function handleDelete(id) {
    // Handle delete functionality if needed
    // This should also remove the question from the state
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
