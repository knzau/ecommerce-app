import styled from "styled-components";

import ArrowDown from "../../svgs/ArrowDown.svg";

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 3.8rem;
  }

  .arrow-down {
    margin-left: 1rem;
    margin-bottom: 5px;
  }
  select {
    background: var(--c-white);
    border: none;
    min-width: 114px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    outline: none;

    background-image: url("${ArrowDown}");
    background-position: 85% 60%;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  option {
    color: var(--c-primary-dark);
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    font-size: 18px;
    font-style: normal;
    cursor: pointer;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    height: 39px;
    padding: 5px 3px;
    border: none;
    outline: none;
  }

  select option {
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    border: none;
    outline: none;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;
