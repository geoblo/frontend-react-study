import { useState } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { Reset } from "styled-reset";

import Main from "./Main";
import FramerMotionEx from "./FramerMotionEx";
import FullCalendarEx from "./FullCalendarEx";
import SwiperEx from "./SwiperEx";

const Header = styled.header`
  background: #1c1c1c;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: gray;
  }
`;

const MenuContainer = styled.div`
  width: 50%;
  /* width: 500px; */
  height: 100vh;
  position: fixed;
  top: 0;
  right: -50%;
  /* right: -500px; */

  background-color: #eaeaea;
  z-index: 9;
  padding: 60px 20px 0;
  box-sizing: border-box;
  color: black;

  transition: 0.5s;
  ${props => props.showMenu && 
    css`
      right: 0;
    `}
`;

function AppContainer() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BrowserRouter>
      {/* <Reset /> */}

      {/* Header */}
      <Header>
        <h4>
          <Link to="/" >로고</Link>
        </h4>
        <MenuButton onClick={() => { setShowMenu(showMenu => !showMenu); }}>
          {showMenu ? <MdClose color="black" /> : <MdMenu />}
        </MenuButton>

        {/* Slide Menu */}
        {/* {showMenu && ( */}
          <MenuContainer showMenu={showMenu}>
            <ul>
              <li>메뉴1</li>
              <li>메뉴2</li>
              <li>메뉴3</li>
              <li>메뉴4</li>
            </ul>
          </MenuContainer>
        {/* )} */}
      </Header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/swiper" element={<SwiperEx />} />
        <Route path="/motion" element={<FramerMotionEx />} />
        <Route path="/calendar" element={<FullCalendarEx />} />
        <Route path="/image-preview" element={<ImagePreviewEx />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppContainer;