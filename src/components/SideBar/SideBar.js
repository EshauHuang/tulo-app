import styled from "styled-components";

import Search from "./Search";
import SiteLink from "./SiteLink";
import Profile from "./Profile";
import Header from "./Header";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  transition: all 0.5s ease;
  width: ${(props) => (props.hide ? 65 : 240)}px;
  background-color: ${(props) => props.theme.bg};
  * {
    color: ${(props) => props.theme.fc};
  }
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const SideBar = ({ state, user, event }) => {
  const { hideSidebar, setHideSiteBar } = state;
  const { handleSignOut } = event;
  const lists = [
    {
      nameEn: "user",
      nameCh: "個人資料",
    },
    {
      nameEn: "works",
      nameCh: "作品",
    },
  ];
  const handleShowBar = () => {
    setHideSiteBar(hideSidebar ? 0 : 1);
  };
  return (
    <Container hide={hideSidebar}>
      <Header hide={hideSidebar} handleShowBar={handleShowBar} />
      <Search hide={hideSidebar} handleShowBar={handleShowBar} />
      {lists.map((item, index) => (
        <SiteLink key={index} item={item} hide={hideSidebar} />
      ))}
      <Profile user={user} hide={hideSidebar} onClick={handleSignOut} />
    </Container>
  );
};

export default SideBar;
