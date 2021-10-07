import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import SideBar from "./SideBar";
import HomePage from "../pages/HomePage";
import SettingPage from "../pages/SettingPage";

import { ThemeProvider } from "styled-components";

const navbarTheme = {
  fs: 1,
  fc: "#f1f2f6",
  bg: "#24292d",
  searchBg: "#485460",
};

const Wrapper = styled.div`
  transition: margin-left 0.5s ease;
  margin-left: ${(props) => (props.hide ? 65 : 240)}px;
`;

const App = () => {
  const [hideSidebar, setHideSiteBar] = useState(0);
  return (
    <ThemeProvider theme={navbarTheme}>
      <Router>
        <SideBar state={{ hideSidebar, setHideSiteBar }} />
        <Wrapper hide={hideSidebar}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/setting">
              <SettingPage />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
