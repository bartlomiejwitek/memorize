import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import styles from "../styles/write-card.module.css";

export default function WriteCard({
  question,
  answer,
  callback,
}: {
  question: string;
  answer: string;
  callback: any;
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

  const handleNextButtonClick = () => {
    setUserAnswer("");
    setResult(null);
    callback();
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
          value={userAnswer}
          onChange={(e) => {
            setUserAnswer(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handleCheckButtonClick}>
          Check
        </Button>
        {result !== null ? (
          <Button variant="container" onClick={handleNextButtonClick}>
            Next
          </Button>
        ) : null}
      </Paper>
    </div>
  );
}
