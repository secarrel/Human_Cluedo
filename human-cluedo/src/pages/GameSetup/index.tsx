"use client";

import { NavigationLink, Pages } from "@/app/page";
import Form from "@/components/Form";
import styled from "styled-components";

interface ComponentProps {
  pageSelection: Pages;
  goBack: (selection: Pages) => void;
}

export default function SetupScreen({ pageSelection, goBack }: ComponentProps) {
  return (
    <SetupContainer>
      <span onClick={() => goBack(Pages.Menu)}>
        <NavigationLink>Back</NavigationLink>
      </span>
      <FormContainer>
        <h1>{pageSelection ? "New game" : "this is an existing game"}</h1>
        <br />
        <Form />
      </FormContainer>
    </SetupContainer>
  );
}

const SetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100svw;
  height: 100svh;
  padding: 2rem;
`;

const FormContainer = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 1rem;
`;

const FormHeader = styled.div`
  padding: 1rem 0;
  background-color: blue;
`;
const FormBody = styled.div`
  background-color: blue;
`;
