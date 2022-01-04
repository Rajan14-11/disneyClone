import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <LogoConatiner>
        <Logo>
          <img src="/images/logo.svg" />
        </Logo>
      </LogoConatiner>
      <HeaderMenu>
        <li>
          <a href="#">
            <img src="/images/home-icon.svg" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/search-icon.svg" />
            <span>Search</span>
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <img src="/images/series-icon.svg" />
            <span>Series</span>
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <img src="/images/movie-icon.svg" />
            <span>Movies</span>
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <img src="/images/original-icon.svg" />
            <span>Original</span>
          </a>
        </li>
      </HeaderMenu>
      <LoginButton>Login</LoginButton>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100vw;
  height: 10vh;
  background: url("/images/home-background.png");
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

const LogoConatiner = styled.div`
  display: flex;
  justfy-content: flex-start;
`;

const Logo = styled.div`
  padding: 0vh 20px 0px 20px;
  img {
    width: 15vw;
    height: 6vh;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  li {
    list-style: none;
    position: relative;
  }
  a {
    text-decoration: none;
    color: white;
    padding: 0 1vw;
    display: flex;

    img {
      height: 3vh;
      padding: 0 1vh;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      position: relative;
      transition: all 250ms cubic-bezier;

      &:after {
        content: "";
        width: 100%;
        height: 3px;
        background: white;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        border: none;
        border-radius: 3px;
        opacity: 0;
        transform: scaleX(1);
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: sacleX(1);
      }
    }
  }

  // @media (max-width: 760px) {
  //   display: none;
  // }
`;

const LoginButton = styled.button`
  background: transparent;
  color: white;
  text-transform: uppercase;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 2vw;
`;
