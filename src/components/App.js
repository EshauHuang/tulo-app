import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import SideBar from "./SideBar";
import HomePage from "../pages/HomePage";
import SettingPage from "../pages/SettingPage";
import WorkPage from "../pages/WorkPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import UserPage from "../pages/UserPage";
import WorkEditPage from "../pages/WorkEditPage";
import { ThemeProvider } from "styled-components";
import { signOut } from "../global/webAPI";
import { UserContext } from "../global/contexts";
import useUser from "../hooks/useUser";
import GlobalStyle from "../constants/globalStyle";

const navbarTheme = {
  fc: "#f1f2f6",
  bg: "#222",
  searchBg: "#485460",
};

const Wrapper = styled.div`
  transition: margin-left 0.5s ease;
  margin-left: ${(props) => (props.hide ? 65 : 240)}px;
`;

const App = () => {
  const [hideSidebar, setHideSiteBar] = useState(0);
  const [user, setUser] = useUser();
  const handleSignOut = () => {
    (async () => {
      signOut();
      setUser(null);
    })();
  };
  return (
    <ThemeProvider theme={navbarTheme}>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <SideBar
            state={{ hideSidebar, setHideSiteBar }}
            user={user}
            event={{ handleSignOut }}
          />
          <Wrapper hide={hideSidebar}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/setting">
                <SettingPage />
              </Route>
              <Route path={["/works", "/newWork", "/work/:workId/:type"]}>
                <WorkPage />
              </Route>
              <Route path="/signIn">
                <SignInPage />
              </Route>
              <Route path="/signUp">
                <SignUpPage />
              </Route>
              <Route path="/user">{user && <UserPage />}</Route>
              <Route path="/edit:id">
                <WorkEditPage />
              </Route>
            </Switch>
          </Wrapper>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
