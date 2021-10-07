import styled from "styled-components";
import Search from "./Search";
import LinkSite from "./LinkSite";
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
`;

const SideBar = ({ state }) => {
  const { hideSidebar, setHideSiteBar } = state;
  const lists = ["Dashboard", "User", "Message", "Works", "Loves", "Setting"];
  const handleShowBar = () => {
    setHideSiteBar(hideSidebar ? 0 : 1);
  };
  return (
    <Container hide={hideSidebar}>
      <Header hide={hideSidebar} handleShowBar={handleShowBar} />
      <Search hide={hideSidebar} handleShowBar={handleShowBar} />
      {lists.map((name, index) => (
        <LinkSite key={index} name={name} hide={hideSidebar} />
      ))}
      <Profile hide={hideSidebar} />
    </Container>
  );
};

export default SideBar;
