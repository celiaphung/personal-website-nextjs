import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  border-radius: 96px;
`;

export const StyledContainer = styled.div`
  padding: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledMain = styled.main`
  text-align: justify;
  max-width: 500px;
`;

export const LinkText = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const HomeHeading = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 10;
  margin: 1rem 0;
`;

export const Heading = styled.h1`
  width: 100%;
  text-align: center;
  color: inherit;
`;

export const BackToHome = styled.a`
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 100%;
  color: #0070f3;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Buttons = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const StyledButton = styled.a`
  background-color: #ffffff;
  border: #aaf solid 1px;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  color: #aaf;
  width: 100px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background: #f5f5f5;
  }
`;

export const Intro = styled.p`
  font-family: Open Sans, sans-serif;
`;
