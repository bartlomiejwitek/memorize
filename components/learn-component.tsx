import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import WriteCard from "./write-card";

export default function LearnComponent({ data }) {
  // const [currentCard, setCurrentCard] = useState({ question: "", answer: "" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = () => {
    console.log("answered");
    setCurrentIndex((prev) => {
      if (prev + 1 < data.length) {
        return ++prev;
      }
    });
  };

  useEffect(() => {
    console.log(data);
    // setCurrentCard({ question: data[0].col1, answer: data[0].col2 });
  }, []);

  return (
    <div>
      <WriteCard
        question={data[currentIndex].col1}
        answer={data[currentIndex].col2}
        callback={handleAnswer}
      />
      <div>
        Question: {currentIndex + 1}/{data.length}
      </div>
      {currentIndex === data.length - 1 ? (
        <div>
          Finished!{" "}
          <Button
            variant="contained"
            onClick={() => {
              setCurrentIndex(0);
            }}
          >
            Reset
          </Button>
        </div>
      ) : null}
    </div>
  );
}
