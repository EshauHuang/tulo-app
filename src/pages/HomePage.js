import styled from "styled-components";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import WorksBlock from "../components/WorksBlock";
import SiteBanner from "../components/SiteBanner";

const Container = styled.div`
  position: relative;
  width: 1080px;
  margin: 0 auto;
  padding: 30px 0px;
`;

const Navbar = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  right: 0;
  top: 0;
  height: 30px;
  width: 250px;
  font-size: 0.7rem;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  & > a {
    margin-right: 15px;
    color: #595959;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Navbar>
        <Link to="sighout">登出</Link>
        <Link to="sighup">註冊</Link>
        <Link to="sighin">登入</Link>
      </Navbar>
      <SiteHeader />
      <SiteBanner />
      <WorksBlock />
      <WorksBlock />
    </Container>
  );
};

export default HomePage;
