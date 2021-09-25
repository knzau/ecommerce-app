import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: var(--c-primary);
  color: var(--c-white);
  border: none;

  &:hover {
    background-color: var(--c-white);
    color: var(--c-primary-dark);
    border: 1px solid var(--c-primary-dark);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: var(--c-white);
  outline: none;
  border: none;

  &:hover {
    background-color: var(--c-white);
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: 100%;
  max-width: 29.2rem;
  height: 5.2rem;
  letter-spacing: 2px;
  line-height: 1.92rem;
  padding: 0 1.5rem 0 1.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;

  ${getButtonStyles}
`;
