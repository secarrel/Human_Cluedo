"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ComponentProps {
  skipIntro: (timer: number) => void;
}

export default function Welcome({ skipIntro }: ComponentProps) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setInterval(() => setTimer((oldTime) => oldTime + 1), 100);
  }, []);

  return (
    <WelcomeContainer onClick={() => skipIntro(timer)}>
      <Title>Human Cluedo</Title>
      <span>You can skip after 2.3 seconds</span>
      <span>
        I'll add some cool animation here to make the wait less boring!
      </span>
      <Title>{timer}</Title>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.div`
  width: 90vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: --quickSand;
`;
