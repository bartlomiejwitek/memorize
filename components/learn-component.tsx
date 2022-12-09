import { useEffect, useState } from "react";
import WriteCard from "./write-card";

export default function LearnComponent({ data }) {
  const [currentCard, setCurrentCard] = useState({ question: "", answer: "" });
  const handleAnswer = () => {
    console.log("answered");
  };

  useEffect(() => {
    console.log(data);
    setCurrentCard({ question: data[0].col1, answer: data[0].col2 });
  }, []);

  return (
    <div>
      <WriteCard
        question={currentCard.question}
        answer={currentCard.answer}
        callback={handleAnswer}
      />
    </div>
  );
}
