import { NavigationLink, Pages } from "@/app/page";
import styled from "styled-components";

interface ComponentProps {
  selectOption: (selection: Pages) => void;
}

export default function Menu({ selectOption }: ComponentProps) {
  return (
    <>
      <MenuTitle>Human Cluedo</MenuTitle>
      <MenuContainer>
        <ListItem onClick={() => selectOption(Pages.NewGame)}>
          <NavigationLink>New game</NavigationLink>
        </ListItem>
        <ListItem onClick={() => selectOption(Pages.LoadGame)}>
          <NavigationLink>Continue previous game</NavigationLink>
        </ListItem>
        <ListItem onClick={() => selectOption(Pages.Rules)}>
          <NavigationLink>How to play</NavigationLink>
        </ListItem>
      </MenuContainer>
    </>
  );
}

const MenuTitle = styled.h1`
  font-size: 2.8rem;
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 3rem;
  width: 100%;
`;

const ListItem = styled.li`
  text-align: center;
  width: 100%;
  height: 2rem;
`;
