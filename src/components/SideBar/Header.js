import { Link } from "react-router-dom";
import styled from "styled-components";

import { MenuIcon } from "./Icons";
import logo from "../../images/logo.png";

const SiteName = styled.div`
  cursor: pointer;
  font-size: 2rem;
  margin-left: 10px;
  white-space: nowrap;
  font-family: DFKai-SB;
`;

const SiteMark = styled(Link)`
  display: flex;
  align-items: flex-start;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  transition: max-width 0.4s ease;

  ${(props) =>
    props.hide &&
    `
    transition: max-width 0.4s ease;
    max-width: 0px;
  `}
`;

const SiteLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 40px;
  transition: right 0.5s ease-in-out, transform 0.3s ease;
  ${MenuIcon} {
    position: absolute;
    top: 10px;
    right: 0;

    transform: translateY(-25%);
    ${(props) =>
      props.hide &&
      `
      transition: right 0.5s ease-in-out, transform 0.3s ease;
      right: 50%;
      transform: translate(50%, -25%);
    `}
  }
`;

const Header = ({ hide, handleShowBar }) => {
  return (
    <HeaderContainer hide={hide}>
      <MenuIcon onClick={handleShowBar} hide={hide} />
      <SiteMark hide={hide} to="/">
        <SiteLogo src={logo} />
        <SiteName>圖樂</SiteName>
      </SiteMark>
    </HeaderContainer>
  );
};

export default Header;
