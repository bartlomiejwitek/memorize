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

  const handleCheckButtonClick = () => {
    //VERY simple logic here, rework;
    console.log(userAnswer);
    if (answer.toLowerCase().trim() === userAnswer.toLowerCase().trim()) {
      console.log("ok");
    } else {
      console.log("nok");
    }
  };

  return (
    <div className={styles.wrapper}>
      <Paper variant="outlined" className={styles.inner}>
        {question}
        <TextField
          id="outlined-basic"
          label="Answer"
          variant="outlined"
          onChange={(e) => {
            setUserAnswer(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handleCheckButtonClick}>
          Check
        </Button>
      </Paper>
    </div>
  );
}
