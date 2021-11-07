import styled, { css } from "styled-components";

const AttributeSelectStyles = css`
  background-color: #000000;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
`;

const BigSquareStyles = css`
  width: 6.3rem;
  height: 4.5rem;
  background-color: ${(props) => (props.BackColor ? props.BackColor : "white")};
  color: ${(props) => (props.BackColor === "#000000" ? "white" : "gray")};

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

const ColorStyles = css`
  font-family: Source Sans Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  letter-spacing: 0.05em;
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    margin-right: 1.2rem;
  }
`;

const getButtonStyles = (props) => {
  if (props.selectToggleAttribHidden) {
    return AttributeSelectStyles;
  } else if (props.BigSquare) {
    return BigSquareStyles;
  } else if (props.SmallSquare) {
    return SmallSquareStyles;
  } else if (props.BackColor) {
    return ColorStyles;
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
