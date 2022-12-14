import Head from "next/head";
import Image from "next/image";
import FileLoader from "../components/file-loader.component";
import styles from "../styles/Home.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LearnComponent from "../components/learn-component";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
export default function Home() {
  const [data, setData] = useState(null);

  const handleDataLoaded = (parsedData: any) => {
    setData(parsedData);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <FileLoader onDataLoaded={handleDataLoaded}></FileLoader>
          </CardContent>
        </Card>
        {data ? (
          <Button>
            <Link href="/learn">Learn</Link>
          </Button>
        ) : null}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
