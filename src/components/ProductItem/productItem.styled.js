import styled from "styled-components";

export const StyledProductItem = styled.div`
  @media (max-width: 575px) {
    max-width: 370px;
  }
  position: relative;
  .img-box {
    position: relative;
    overflow: hidden;
    &:hover {
      .img-overlay {
        opacity: 1;
      }
      .img-icons {
        right: calc(-35px / 2);
      }
    }
    .img-overlay {
      transition: all 0.5s;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.1);
      opacity: 0;
      z-index: 2;
    }
    .img-icons {
      transition: all 0.5s;
      position: absolute;
      z-index: 3;
      top: 50%;
      right: -50%;
      transform: translate(-50%, -50%);
      .icoEl-box {
        transition: all 0.5s;
        background-color: var(--re-identity);
        padding: 5px;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.4);
        margin-bottom: 5px;
        &:hover {
          background-color: black;
        }
        svg {
          font-size: 25px;
          color: white;
        }
        &.added-to-wishlist {
          background-color: black;
          &:hover {
            background-color: white;
          }
          svg {
            color: red;
          }
        }
      }
    }
    img {
      width: 100%;
      height: auto;
      margin: auto;
      @media (max-width: 576px) {
        width: 250px;
      }
    }
  }
  .product-name {
    transition: all 0.2s;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: var(--re-identity);
    }
  }
`;
