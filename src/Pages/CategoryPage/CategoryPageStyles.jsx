import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 8.125%;
  h2 {
    text-transform: Capitalize;
    font-size: 42px;
    font-weight: 400;
    line-height: 67px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 8rem;
    color: var(--c-primary-dark);
  }

  .category-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 386px));
    grid-template-rows: auto;
    gap: 40px;
    margin-top: 8.762rem;
  }
`;
