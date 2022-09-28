import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 220px;
  height: 250px;
  border-radius: 8px;
  background-color: ${(props) => props.background};
  border: 2px transparent solid;

  &:hover {
    border: 2px black solid;
  }

  h2 {
    font-size: 1rem;
  }

  img {
    width: 150px;
    height: 150px;
  }

  p {
    font-size: 13px;
  }
`;
