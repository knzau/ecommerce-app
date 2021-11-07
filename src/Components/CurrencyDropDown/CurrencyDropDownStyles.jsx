import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  .dd-header {
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    font-size: 1.8rem;
    font-weight: 500;
    position: relative;
  }

  .dd-currency-icon {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 500;
  }

  .arrow-down {
    position: absolute;
    left: 100%;
    top: 50%;
    width: 80%;
    z-index: 500;
    cursor: pointer;
  }

  .arrow-up {
    position: absolute;
    left: 100%;
    top: 50%;
    z-index: 600;
    width: 80%;
    cursor: pointer;
  }

  .dd-header-title {
    margin-right: 1rem;
  }
  .dd-list {
    width: 116px;
    display: flex;
    flex-direction: column;
    background-color: var(--c-white);
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    padding: 2rem;

    position: absolute;
    z-index: 400;
    margin-top: 7.5px;
    left: -50%;
  }

  .dd-list-item {
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;

    span {
      margin-left: 1rem;
    }

    &:not(:last-child) {
      margin-bottom: 2.1rem;
    }

    &:hover {
      color: var(--c-gray);
    }
  }
`;
