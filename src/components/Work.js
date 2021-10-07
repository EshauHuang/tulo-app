import styled from "styled-components";
import pic2 from "../images/pic2.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:nth-child(5n - 4)) {
    margin-left: 30px;
  }
  margin-top: 30px;
`;

const WorkImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  background: white;
`;

// const SelectBar = styled.div`
//   width: 100%;
//   height: 20px;
//   background: #282f34;
//   color: ${(props) => props.theme.fc};
// `;

const WorkDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 52px;
  background: transparent;
  box-sizing: border-box;
  font-size: 0.8rem;
  color: ${(props) => props.theme.fc};
`;

const WorkTitle = styled.div``;

const AuthorDetail = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorPhoto = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
`;

const AuthorName = styled.div`
  margin-left: 5px;
`;

const Work = () => {
  return (
    <Container>
      <WorkImage src={pic2} />
      <WorkDetail>
        <WorkTitle>123</WorkTitle>
        <AuthorDetail>
          <AuthorPhoto />
          <AuthorName>asdas</AuthorName>
        </AuthorDetail>
      </WorkDetail>
    </Container>
  );
};

export default Work;
