import styled from "styled-components";

export const StyledNavList = styled.ul`
  li {
    a {
      position: relative;
      svg {
        font-size: 25px;
      }
      span {
        color: white;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 2px;
        position: absolute;
        top: 0px;
        left: -5px;
        width: 23px;
        height: 23px;
        border-radius: 100%;
        background-color: red;
      }
    }
  }
`;
