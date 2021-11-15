import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiteIcon, MenuIcon } from "./Icons";

const SiteName = styled.div`
  cursor: pointer;
  font-size: 2rem;
  margin-left: 5px;
`;

const SiteMark = styled(Link)`
  display: flex;
  align-items: flex-start;
  max-width: 130px;
  overflow: hidden;
  transition: max-width 0.4s ease-in-out;
  ${(props) =>
    props.hide &&
    `
    max-width: 0px;
  `}
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
        <SiteIcon />
        <SiteName hide={hide}>Website</SiteName>
      </SiteMark>
    </HeaderContainer>
  );
};

export default Header;
