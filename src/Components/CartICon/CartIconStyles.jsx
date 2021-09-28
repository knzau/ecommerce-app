import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  height: 3rem;

  .shopping-icon {
    width: 3rem;
    height: 3rem;
    fill: var(--color-grey-dark-1);

    &:hover {
      fill: var(--color-grey-dark-2);
    }
  }

  .bounce-top {
    -webkit-animation: bounce-top 0.9s both;
    animation: bounce-top 0.9s both;
  }

  .item-count {
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: var(--c-primary-dark);
    color: var(--c-white);
    position: absolute;
    top: -1.2rem;
    right: -1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-left: 2.2rem;

  .arrow-down {
    margin-left: 1rem;
    margin-bottom: 5px;
  }
`;
