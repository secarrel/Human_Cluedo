import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Title />
      </main>
    </div>
  );
}
