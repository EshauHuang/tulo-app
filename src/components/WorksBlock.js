import styled from "styled-components";
import { useRef } from "react";
import Work from "./Work";

const Container = styled.div``;
const Header = styled.div`
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.fc};
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 2px solid #595959;
`;

const SeeAll = styled.div`
  font-size: 0.8rem;
  min-width: 36px;
  font-weight: normal;
  color: #595959;
`;

// 1080px - (5items * 180 = 900px) = 180px / 6 = 30
// 1020 - 900 = 120px
const WorksList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 30px;
`;

const WorksBlock = () => {
  const array = Array.from(Array(10).keys());
  const ItemWrapRef = useRef(null);

  return (
    <Container>
      <Header>
        <div>最受歡迎</div>
        <SeeAll>See All</SeeAll>
      </Header>
      <WorksList ref={ItemWrapRef}>
        {array.map((id) => (
          <Work key={id} />
        ))}
      </WorksList>
    </Container>
  );
};

export default WorksBlock;
