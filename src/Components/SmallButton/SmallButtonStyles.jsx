import styled from "styled-components";

export const SmallButtonContainer = styled.button`
  width: 6.3rem;
  height: 4.5rem;
  letter-spacing: 0px;
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bolder;
  border: 1px solid #1d1f22;
  box-sizing: border-box;
  background: var(--c-white);
  color: var(--c-primary-dark);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  &:hover {
    background-color: var(--c-primary-dark);
    color: white;
    border: none;
  }
`;
