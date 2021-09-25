import styled from "styled-components";

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
`;
