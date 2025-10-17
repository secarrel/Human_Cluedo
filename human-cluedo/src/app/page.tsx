"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Welcome from "@/pages/welcome";
import Menu from "@/pages/menu";
import SetupScreen from "@/pages/GameSetup";
import styled from "styled-components";

export enum Pages {
  NewGame = 1,
  LoadGame = 2,
  Rules = 3,
  Menu = 4,
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [pageSelection, setPageSelection] = useState<Pages>();

  const skipIntro = (timer: number) => {
    if (timer >= 25) {
      setShowIntro(false);
      setPageSelection(Pages.Menu);
    }
  };

  const selectPage = (selection: Pages) => {
    setPageSelection(selection);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {showIntro && <Welcome skipIntro={(timer) => skipIntro(timer)} />}
        {pageSelection == Pages.Menu && (
          <Menu selectOption={(page) => selectPage(page)} />
        )}
        {(pageSelection == Pages.NewGame ||
          pageSelection == Pages.LoadGame) && (
          <SetupScreen
            pageSelection={pageSelection}
            goBack={(page: Pages) => selectPage(page)}
          />
        )}
      </main>
    </div>
  );
}

export const NavigationLink = styled.h3`
  font-weight: 300;
  transition-property: color;
  transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.02, 0.67, 0.12, 0.83);
  &:hover {
    color: grey;
  }
`;
