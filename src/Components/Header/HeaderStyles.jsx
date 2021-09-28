import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8.125%;
`;

export const LogoWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 auto;
`;

export const CategoriesMenu = styled.ul`
  display: flex;
  li {
    list-style: none;
    &:not(:last-child) {
      margin-right: 3.2rem;
    }

    font-size: 1.6rem;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    text-transform: uppercase;

    a {
      color: var(--c-primary-dark);
      cursor: pointer;
      position: relative;

      ::after {
        content: "";
        display: flex;
        position: absolute;
        top: calc(100% + 30px);
        left: 0;
        width: 100%;
        height: 1px;
        background: var(--c-primary);
        content: "";
        opacity: 0;
        -webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
        -moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
        transition: height 0.3s, opacity 0.3s, transform 0.3s;
        -webkit-transform: translateY(-5px);
        -moz-transform: translateY(-5px);
        transform: translateY(-5px);
      }
    }
    a:hover {
      color: var(--c-primary);
    }
    & a:hover::after,
    & a:focus::after,
    & a:active::after {
      height: 2px;
      opacity: 1;
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      transform: translateY(0px);
    }
  }
`;
