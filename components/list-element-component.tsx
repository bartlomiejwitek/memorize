import Link from "next/link";
import styles from "../styles/list-element.module.css";

export default function ListElement({ id }: { id: number }) {
  return (
    <div className={styles.wrapper}>
      <div>Title</div>
      <div>
        <button>
          <Link href={`/learn/${id}`}>Learn</Link>
        </button>
        <button>Edit</button>
      </div>
    </div>
  );
}
