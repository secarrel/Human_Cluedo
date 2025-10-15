"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Welcome from "@/pages/welcome";
import Menu from "@/pages/menu";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const skipIntro = (timer: number) => {
    if (timer >= 25) {
      setShowIntro(false);
      setShowMenu(true);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {showIntro && <Welcome skipIntro={(timer) => skipIntro(timer)} />}
        {showMenu && <Menu />}
      </main>
    </div>
  );
}
