import Button from "@material-ui/core/Button";
import { KeyboardEvent, useEffect, useState } from "react";
import SummaryComponent from "./summary-component";
import WriteCard from "./write-card";

export default function LearnComponent({ data }) {
  // const [currentCard, setCurrentCard] = useState({ question: "", answer: "" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [currentResult, setCurrentResult] = useState(false);

  const handleNextButtonClick = () => {
    // console.log("handle answer");
    setCurrentIndex((prev) => {
      if (prev + 1 < data.length) {
        console.log("prev: " + prev + " . data.lenght: " + data.length);
        return prev + 1;
      } else {
        setFinished(true);
        return prev;
      }
    });
  };

  const handleCheckButtonClick = () => {
    // console.log(result);
  };

  const handleAnswer = (answer) => {
    // console.log(answer);
    // if (answer === true) {
    //   setCorrectCount((prev) => prev + 1);
    // } else if (answer === false) {
    //   setIncorrectCount((prev) => prev + 1);
    // }
  };

  useEffect(() => {
    // console.log("current index:" + currentIndex);
  }, [currentIndex]);

  return (
    <div>
      {finished ? (
        <SummaryComponent
          resetCallback={() => {
            setCurrentIndex(0);
            setFinished(false);
            // setCorrectCount(0);
            // setIncorrectCount(0);
          }}
        />
      ) : (
        <div>
          {" "}
          <WriteCard
            question={data[currentIndex].col1}
            answer={data[currentIndex].col2}
            nextCallback={handleNextButtonClick}
            checkCallback={handleCheckButtonClick}
          />
          <div>
            Question: {currentIndex + 1}/{data.length}
          </div>
        </div>
      )}
    </div>
  );
}
