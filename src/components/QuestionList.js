import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [question, setQuestion] = useState([]);
  console.log(question);

  //  making the path universal
  const url = "http://localhost:4000/questions";

  // fetch method
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((question) => setQuestion(question));
  }, []);

  // patch method/ update
  const handleUpdate = (id, correctIndex) => {
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex }),
    })
      .then((r) => r.json())
      .then((updateAnswer) => {
        const update = question.map((que) => {
          if (que.id === updateAnswer.id) {
            return update;
          }
          return que;
        });
        setQuestion(updateAnswer);
      });
  };
  // console.log(handleUpdate)

  // delete methode
    function handleDelete(id) {
      fetch(`${url}${id}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then(() => {
        const updatedQuestions = question.filter((q) => q.id !== id);
          setQuestion(updatedQuestions);
        });
    }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* {questionList} */}
        {question.map((que) => (
          // {console.log(que)})
          <QuestionItem key={que.id} q={que} handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;