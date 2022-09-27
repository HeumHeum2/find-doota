import styled from "styled-components";

export const Front = styled.div``;

export const Back = styled.div`
  background: royalblue;
  transform: rotateY(180deg);
`;

export const Card = styled.article`
  width: 100%;
  height: 100%;
  border: 1px solid rgb(239, 239, 239);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */

  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;

  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
`;

export const Flip = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1100px;
  cursor: pointer;
  &:hover article {
    transform: rotateY(180deg);
  }
`;
