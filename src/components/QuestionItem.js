import React from "react";

function QuestionItem({ q , handleUpdate , handleDelete }) {
  const { id, prompt, answers, correctIndex } = q;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleAnswerUpdate = (even) =>{
    handleUpdate(id, parseInt(even.target.value))
  }
  // console.log(handleAnswerUpdate)

  const handleQuestionDelete = () =>{
    handleDelete(id)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerUpdate}>{options}</select>
      </label>
      <button  onClick={handleQuestionDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;