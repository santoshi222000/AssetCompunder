import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 10px;
  right: 30px;
  z-index: 20;
  display: none;

  @media (max-width: 1026px){
   
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  }

  div {
    width: 100%;
    height: 0.25rem;
    background-color: ${({ start }) => (start ? "#f1f1f1" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ start }) => (start ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ start }) =>
        start ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ start }) => (start ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ start }) => (start ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

function Burger() {
  const [start, setStart] = useState(false);

  return (
    <>
      <StyledBurger
        style={{ height: "30px", width: "30px"}}
        start={start}
        onClick={() => setStart(!start)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <Navbar start={start} />
    </>
  );
}

export default Burger;
