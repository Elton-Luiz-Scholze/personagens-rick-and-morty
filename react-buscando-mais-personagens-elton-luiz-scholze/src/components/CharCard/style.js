import styled from "styled-components";
import "animate.css";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 220px;
  height: max-content;
  border-radius: 8px;
  border: 2px transparent solid;

  &.Alive {
    background-color: #7de07d;
  }
  &.Dead {
    background-color: #e17a7a;
  }
  &.unknown {
    background-color: #aeaeae;
  }
  &:hover {
    box-shadow: 0px 0px 10px 2px;
  }

  h2 {
    font-size: 1rem;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 2px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 0.3rem;
  }
`;
