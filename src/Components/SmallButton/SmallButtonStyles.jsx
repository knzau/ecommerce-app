import styled, { css } from "styled-components";

const BigSquareStyles = css`
  width: 6.3rem;
  height: 4.5rem;

  &:hover {
    background-color: var(--c-primary-dark);
    color: white;
    border: none;
  }
`;

const SmallSquareStyles = css`
  width: 2.4rem;
  height: 2.4rem;

  &:hover {
    cursor: pointer;
  }
`;

const getButtonStyles = (props) => {
  if (props.BigSquare) {
    return BigSquareStyles;
  } else if (props.SmallSquare) {
    return SmallSquareStyles;
  }
};

export const SmallButtonContainer = styled.div`
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

  ${getButtonStyles}
`;
