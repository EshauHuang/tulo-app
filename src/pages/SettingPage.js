import styled from "styled-components";
import DragBox from "../components/DragBox";

const Container = styled.div`
  padding: 10px;
  width: 500px;
  height: 500px;
  background: white;
`;

const SettingPage = () => {
  return (
    <Container>
      <DragBox />
    </Container>
  );
};

export default SettingPage;
