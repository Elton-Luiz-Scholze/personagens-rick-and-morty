import styled from "styled-components";

export const Img = styled.img`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;
  background-color: #e3e9ec;
  box-shadow: 0px 3px 4px 0px;

  h1 {
    font-size: 1.5rem;
    color: #4870be;
    line-height: 1rem;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
  gap: 16px;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 25px;
  gap: 16px;
  padding: 16px;
  transition: 1s;
`;

export const Button = styled.button`
  height: 40px;
  width: 60px;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  background-color: #4870be;
  color: #fff;
  transition: 1s;

  &:hover {
    background-color: #6abf6a;
    color: #fff;
  }
`;
