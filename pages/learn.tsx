import { useEffect, useState } from "react";
import LearnComponent from "../components/learn-component";

export default function Learn() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("test_set_data") !== null) {
      setData(JSON.parse(localStorage.getItem("test_set_data")));
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {" "}
      {data ? <LearnComponent data={data} /> : null}
    </div>
  );
}
