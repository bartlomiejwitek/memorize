import { Button } from "@material-ui/core";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import styles from "../styles/file-loader.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import LearnComponent from "./learn-component";

export default function FileLoader() {
  const [parsedData, setParsedData] = useState(null);
  const [file, setFile] = useState({});
  const FILE_EXTENSION = "csv";

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150, editable: true },
    { field: "col2", headerName: "Column 2", editable: true },
  ];

  useEffect(() => {
    console.log(parsedData);
  }, [parsedData]);

  const handleFileSelected = (e) => {
    if (e.target.files.length) {
      console.log(e);
      const readFile = e.target.files[0];
      const fileExtension = readFile?.type.split("/")[1];
      console.log(fileExtension);
      if (fileExtension === FILE_EXTENSION) {
        setFile(readFile);
        parseCSV(readFile);
      } else {
        console.log("error");
        //TODO handle error toastr or sth;
      }
    }
  };

  const parseCSV = (file: any) => {
    const reader = new FileReader();
    console.log(file);
    if (!file) return;

    reader.onload = async (e) => {
      console.log(e);
      if (e.target) {
        const csv = Papa.parse(e.target.result, {
          header: false,
          delimiter: ",",
        });
        const gridData = transformDataForMuiGrid(csv.data);
        setParsedData(gridData);
        console.log(gridData);
      }
    };

    reader.readAsText(file);
  };

  const transformDataForMuiGrid = (data: any) => {
    let transformed = [];
    let id = 0;
    for (let row of data) {
      console.log(row);
      transformed.push({ id: id, col1: row[0], col2: row[1] });
      id++;
    }
    return transformed;
  };

  return (
    <div className={styles.wrapper}>
      <input
        accept=".csv"
        className={styles.fileLoaderInput}
        id="file-loader-button"
        type="file"
        onChange={(e) => handleFileSelected(e)}
      ></input>
      <label htmlFor="file-loader-button">
        <Button variant="contained" component="span">
          {" "}
          Load file
        </Button>
      </label>
      {file ? file.name : null}
      <div style={{ height: "300px", width: "80vw" }}>
        {parsedData ? (
          <DataGrid
            editMode="row"
            rows={parsedData}
            columns={columns}
          ></DataGrid>
        ) : null}
      </div>
      {parsedData ? <LearnComponent data={parsedData} /> : null}
    </div>
  );
}
