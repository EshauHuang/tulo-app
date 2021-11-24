import styled from "styled-components";

import logo from "../../images/logo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 80%;
  margin: 0 auto;
`;

const SiteLogo = styled.img`
  height: 200px;
  border-radius: 50%;
`;

const Content = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SiteName = styled.div`
  font-size: 5rem;
  color: white;
  font-family: DFKai-SB;
`;

const Desc = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;

const SiteHeader = () => {
  return (
    <Container>
      <SiteLogo src={logo} />
      <Content>
        <SiteName>圖樂</SiteName>
        <Desc>致力於打造一個創作者及使用者能互利互惠的平台</Desc>
      </Content>
    </Container>
  );
};

export default SiteHeader;
