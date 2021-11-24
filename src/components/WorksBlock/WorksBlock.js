import styled from "styled-components";

import Work from "./Work";

const Container = styled.div`
  & + & {
    margin-top: 40px;
  }
`;
const Header = styled.div`
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.fc};
  font-size: 1.8rem;
  font-weight: bold;
  border-bottom: 2px solid #595959;
`;

const SeeAll = styled.div`
  font-size: 1.3rem;
  min-width: 36px;
  font-weight: normal;
  color: #595959;
`;

const WorksList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 30px;
`;

const WorksBlock = ({ works, title }) => {
  return (
    <Container>
      <Header>
        <div>{title}</div>
        <SeeAll>See All</SeeAll>
      </Header>
      <WorksList>
        {works.map((work, index) => (
          <Work work={work} key={index} />
        ))}
      </WorksList>
    </Container>
  );
};

export default WorksBlock;
