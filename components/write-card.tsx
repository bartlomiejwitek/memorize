import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { useCallback, useEffect, useState } from "react";
import styles from "../styles/write-card.module.css";

export default function WriteCard({
  question,
  answer,
  nextCallback,
  checkCallback,
}: {
  question: string;
  answer: string;
  nextCallback: any;
  checkCallback: any;
}) {
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState<boolean | null>(null);

  const handleCheckButtonClick = () => {
    //VERY simple logic here, rework;
    console.log(userAnswer);
    if (answer.toLowerCase().trim() === userAnswer.toLowerCase().trim()) {
      setResult(true);
      console.log("ok");
    } else {
      setResult(false);
      console.log("nok");
    }
  };

  useEffect(() => {
    // console.log(data);
    // setCurrentCard({ question: data[0].col1, answer: data[0].col2 });
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [userAnswer, result]);

  const handleNextButtonClick = () => {
    setUserAnswer("");
    nextCallback();
    setResult(null);
  };

  const onKeyDown = (event: any) => {
    console.log(event.code);
    console.log(result);
    if (event.code === "Enter") {
      if (result === true) {
        handleNextButtonClick();
      } else {
        handleCheckButtonClick();
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <Paper variant="outlined" className={styles.inner}>
        {result === true ? (
          <span style={{ color: "green" }}>Correct!</span>
        ) : null}
        {result === false ? (
          <span style={{ color: "red" }}>Wrong! Correct answer: {answer}</span>
        ) : null}
        <div className={styles.question}>{question}</div>
        <TextField
          id="outlined-basic"
          label="Answer"
          variant="outlined"
          autoComplete="off"
          value={userAnswer}
          onChange={(e) => {
            console.log(e.target.value);
            setUserAnswer(e.target.value);
          }}
        />
        {result !== true ? (
          <Button variant="contained" onClick={handleCheckButtonClick}>
            Check
          </Button>
        ) : null}
        {result !== false && result !== null ? (
          <Button variant="contained" onClick={handleNextButtonClick}>
            Next
          </Button>
        ) : null}
      </Paper>
    </div>
  );
}
