import styled from "styled-components";
import { Title } from "../welcome";

export default function Menu() {
  return (
    <>
      <Title>Human Cluedo</Title>
      <h2>Main menu</h2>
      <ul>
        <li>New game</li>
        <li>Continue previous game</li>
        <li>How to play</li>
        <li>Using this app</li>
      </ul>
    </>
  );
}
