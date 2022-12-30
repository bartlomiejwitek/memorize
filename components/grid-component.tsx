import { useState } from "react";
import styles from "../styles/grid-component.module.css";

export default function Grid({ data }) {
  const [editIndex, setEditIndex] = useState([-1, -1]);

  const handleCellClick = (i, j) => {
    if (editIndex[0] === i && editIndex[1] === j) {
      setEditIndex([-1, -1]);
    } else {
      setEditIndex([i, j]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <table>
        <thead>
          <tr>
            {data[0].map((element) => {
              return <th colspan="1">{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, i) => {
            return (
              <tr>
                {row.map((element: any, j) => {
                  return (
                    <td onClick={() => handleCellClick(i, j)}>
                      {editIndex[0] === i && editIndex[1] === j ? (
                        <input className={styles.input}></input>
                      ) : (
                        element
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
